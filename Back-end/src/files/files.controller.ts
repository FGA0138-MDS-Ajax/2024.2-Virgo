import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
  Param,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as FormData from 'form-data';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { DatabaseService } from 'src/database/database.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserPayload } from 'src/auth/models/UserPayload';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly databaseService: DatabaseService,
  ) {}

  // 🔹 Upload de Arquivos para Diagnóstico e Registro no Histórico
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
    @CurrentUser() currentUser: UserPayload,
  ) {
    const filePath = path.join(__dirname, '../../uploads', file.filename);
    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), file.filename);
    formData.append('plant_type', body.plant_type);
    console.log(file); //printa o file no terminal do back
    console.log(body.plant_type);

    try {
      const response = await axios.post(
        'http://localhost:3002/upload',
        formData,
        { headers: { ...formData.getHeaders() } },
      );

      const { prediction } = response.data;
      const uploadedFilename = file.filename;

      // 🔹 Limita o histórico a 10 registros por usuário
      const historicoCount = await this.databaseService.historico.count({
        where: { userId: currentUser.id },
      });

      if (historicoCount >= 10) {
        const oldestRecord = await this.databaseService.historico.findFirst({
          where: { userId: currentUser.id },
          orderBy: { dataHora: 'asc' },
        });

        if (oldestRecord) {
          const filePathToDelete = path.join(
            __dirname,
            '../../uploads',
            oldestRecord.foto,
          );
          if (fs.existsSync(filePathToDelete)) {
            fs.unlinkSync(filePathToDelete);
          }
          await this.databaseService.historico.delete({
            where: { id: oldestRecord.id },
          });
        }
      }

      await this.databaseService.historico.create({
        data: {
          userId: currentUser.id,
          diagnostico: prediction,
          foto: uploadedFilename,
        },
      });

      return { ...response.data, filename: uploadedFilename };
    } catch (error) {
      console.error('Erro ao enviar a imagem para o main.py:', error);
      throw error;
    }
  }

  // 🔹 Recuperar Histórico de Uploads do Usuário
  @Get('history')
  async getUserHistory(@CurrentUser() currentUser: UserPayload) {
    const historico = await this.databaseService.historico.findMany({
      where: { userId: currentUser.id },
      orderBy: { dataHora: 'desc' },
    });

    return historico.map((item) => ({
      ...item,
      dataHora: format(item.dataHora, 'dd/MM/yyyy HH:mm', { locale: ptBR }),
    }));
  }

  // 🔹 Upload de Votos (Público)
  @IsPublic()
  @Post('upload_vote')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/votes',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + path.extname(file.originalname));
        },
      }),
    }),
  )
  async uploadVote(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'Nenhum arquivo enviado.' };
    }
    return { message: 'Imagem salva com sucesso!', filename: file.filename };
  }

  // 🔹 Rejeitar Arquivo (Público)
  @IsPublic()
  @Post('reject/:filename')
  async rejectFile(@Param('filename') filename: string) {
    // 🔹 Exclui do histórico onde a foto corresponde ao filename recebido
    await this.databaseService.historico.deleteMany({
      where: { foto: filename },
    });

    console.log(`DEBUG - Imagem ${filename} removida do histórico.`);

    this.filesService.moveToRejected(filename);
    return {
      message: `Imagem ${filename} movida para rejeitados e removida do histórico.`,
    };
  }
}

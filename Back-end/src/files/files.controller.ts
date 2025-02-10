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
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { FilesService } from './files.service';
import { diskStorage } from 'multer';
import { DatabaseService } from 'src/database/database.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserPayload } from 'src/auth/models/UserPayload';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly databaseService: DatabaseService,
  ) {}


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

    console.log(file);
    console.log(body.plant_type);

    try {
      const response = await axios.post(
        'http://localhost:3002/upload',
        formData,
        {
          headers: {
            ...formData.getHeaders(),
          },
        },
      );

      const { prediction } = response.data;
      const uploadedFilename = file.filename;

      // 🔹 Verifica quantos registros o usuário tem
      const historicoCount = await this.databaseService.historico.count({
        where: { userId: currentUser.id },
      });

      // 🔹 Se já houver 10 registros, apaga o mais antigo
      if (historicoCount >= 10) {
        const oldestRecord = await this.databaseService.historico.findFirst({
          where: { userId: currentUser.id },
          orderBy: { dataHora: 'asc' }, // Pegando o mais antigo
        });

        if (oldestRecord) {
          const filePathToDelete = path.join(__dirname, '../../uploads', oldestRecord.foto);
        
          if (fs.existsSync(filePathToDelete)) {
            fs.unlinkSync(filePathToDelete); // Remove a imagem do sistema de arquivos
          }
        
          // 🔹 Agora remove o registro do banco
          await this.databaseService.historico.delete({
            where: { id: oldestRecord.id },
          });
        }
      }

      
      await this.databaseService.historico.create({
        data: {
          userId: currentUser.id,
          diagnostico: prediction,
          dataHora: new Date(),
          foto: uploadedFilename,
        },
      });

      return { ...response.data, filename: uploadedFilename };
    } catch (error) {
      console.error('Erro ao enviar a imagem para o main.py:', error);
      throw error;
    }
  }

  @Get('history')
  async getUserHistory(@CurrentUser() currentUser: UserPayload) {
    return this.databaseService.historico.findMany({
      where: { userId: currentUser.id },
      orderBy: { dataHora: 'desc' }, 
    });    
  }
}

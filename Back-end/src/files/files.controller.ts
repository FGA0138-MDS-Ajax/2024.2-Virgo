import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { IsPublic } from "src/auth/decorators/is-public.decorator";
import { diskStorage } from 'multer';
import { extname } from 'path';
import axios from 'axios';
import * as FormData from 'form-data';

@Controller('files')
export class FilesController {
  @IsPublic()
  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        return cb(new BadRequestException('Apenas arquivos de imagens são permitidos!'), false);
      }
      cb(null, true);
    },
  }))
  async uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new BadRequestException('Arquivo não uploadado!');
    }
    console.log('file uploaded:', file); // Log para inspecionar o objeto file

    
    //ACHAR COMO ARRUMAR ESSE FORMDATA PARA IA (algo a ver com json.stringify????)
    const formData = new FormData();
    formData.append('file', {
      value: JSON.stringify(file.buffer),
      options: {
        filename: JSON.stringify(file.originalname),
        contentType: JSON.stringify(file.mimetype),
        type: 'image/jpeg', 
      },
    });
    console.log("passoucarail");
     // envia imagem pra ia
    // espera resposta 
    try {
      console.log("tentando post");
      const response = await axios.post('http://localhost:3002/upload', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      }); // fetch do front, colocar as labels 'morango, banana etc' como headers no url ---> EXEMPLO 'Label': label.tipo [recebidas do front via endpoint tb].
      console.log("chegou aqui");
      //envia resposta pro front-end
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar a imagem pra IA:', error);
      throw new BadRequestException('Falha ao processar a imagem lol.');
    }
  }
}
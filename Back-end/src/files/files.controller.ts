import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import axios from 'axios';
import * as fs from 'fs'; //permite interagir com filesystem
import * as path from 'path';
import * as FormData from 'form-data';
@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const filePath = path.join(__dirname, '../../uploads', file.filename); //constrói o URL onde o arquivo vai ser salvo nas nossas pastas

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath), file.filename); //com o URL pego lá em cima, a gente envia o file e o nome dele (doc do fastapi pede)
    // formData.append('plant_type', body.plant_type); // adiciona o plant_type ao formData, vindo do body
    console.log(file); //printa o file no terminal do back
    // console.log(body.plant_type);
    try {
      const response = await axios.post('http://localhost:3002/upload', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao enviar a imagem para o main.py:', error);
      throw error;
    }
  }
}
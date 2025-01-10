import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { IsPublic } from "src/auth/decorators/is-public.decorator";
@Controller('files')
export class FilesController {
  @IsPublic()
  @Post('upload')
  @UseInterceptors(FileInterceptor('image', {
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        return cb(new BadRequestException('Only image files are allowed!'), false);
      }
      cb(null, true);
    },
  }))
  uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new BadRequestException('No file uploaded!');
    }
    console.log('file uploaded:', file);
    
    //jogar para a IA conferir e processar a imagem
    
    return { message: 'IMAGEM ENVIADA!!!!!!! (ESSA EH A RESPOSTA DO SERVIDOR, AQUI VAI SER RETORNADO A RESPOSTA DA IA)' }; //return vai ser a imagem processada + resp da ia
  }
}
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FilesService {
  private readonly uploadPath = path.join(__dirname, '../../uploads/');
  private readonly rejectedPath = path.join(
    __dirname,
    '../../uploads/rejected',
  );

  constructor() {
    // Criar pastas, se não existirem
    if (!fs.existsSync(this.uploadPath)) {
      fs.mkdirSync(this.uploadPath, { recursive: true });
    }
    if (!fs.existsSync(this.rejectedPath)) {
      fs.mkdirSync(this.rejectedPath, { recursive: true });
    }
  }

  moveToRejected(filename: string): void {
    const filePath = path.join(this.uploadPath, filename);
    const rejectedFilePath = path.join(this.rejectedPath, filename);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Arquivo não encontrado: ${filePath}`);
    }

    fs.renameSync(filePath, rejectedFilePath);
    console.log(`Arquivo movido para rejeitados: ${rejectedFilePath}`);
  }
}

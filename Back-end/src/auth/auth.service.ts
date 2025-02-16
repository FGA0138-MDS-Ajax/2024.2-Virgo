import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserPayload } from './models/UserPayload';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs-extra';
import * as path from 'path';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: CreateUserDto): UserToken {
    const payload: UserPayload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (user) {
      const isPassowordValid = await bcrypt.compare(password, user.password);

      if (isPassowordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email ou senha não conferem');
  }

  generateRandomPassword(): string {
    return crypto.randomBytes(8).toString('hex');
  }

  async sendTemporaryPassword(email: string, temporaryPassword: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'cuidarverde@gmail.com',
        pass: 'omab pcqn mvay lvzd',
      },
    });

    const mailOptions = {
      from: 'cuidarverde@gmail.com',
      to: email,
      subject: 'Sua senha temporária',
      text: `Sua senha temporária é: ${temporaryPassword}. 
          Você pode usar esta senha para acessar sua conta e alterá-la assim que possível.`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return { message: 'A senha temporária foi enviada para o seu e-mail.' };
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      return {
        message: 'Erro ao enviar o e-mail. Tente novamente mais tarde.',
      };
    }
  }

  async forgotPassword(email: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const temporaryPassword = this.generateRandomPassword();

      await this.userService.updatePassword(user.id, temporaryPassword);

      await this.sendTemporaryPassword(user.email, temporaryPassword);

      return { message: 'A senha temporária foi enviada para o seu e-mail.' };
    } else {
      return { message: 'Não encontramos um usuário com esse e-mail.' };
    }
  }

  async moveRejectedImage(imageFilename: string) {
    const oldPath = path.join(__dirname, '..', '..', 'uploads', imageFilename);
    const newPath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      'rejeitadas',
      imageFilename,
    );

    try {
      await fs.ensureDir(path.dirname(newPath));

      await fs.move(oldPath, newPath, { overwrite: true });

      return { message: 'Imagem movida para a pasta rejeitadas' };
    } catch (error) {
      console.error('Erro ao mover a imagem:', error);
      throw new Error('Falha ao mover a imagem');
    }
  }

  async voteOnImage(imageFilename: string, vote: boolean) {
    if (!vote) {
      return this.moveRejectedImage(imageFilename);
    }

    return { message: 'Voto registrado como SIM, imagem mantida' };
  }
}

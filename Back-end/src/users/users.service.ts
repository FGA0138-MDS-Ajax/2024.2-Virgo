import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/Create-user.dto';
import { UpdateUserDto } from './dto/Update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto) {
    const { cpf, crea, role, password, ...rest } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const data: Prisma.UserCreateInput = {
      ...rest,
      password: hashedPassword,
      role,
      ...(role === 'AGRONOMO' && cpf && crea
        ? {
            Agronomo: {
              create: {
                cpf,
                crea,
              },
            },
          }
        : {}),
    };

    return this.databaseService.user.create({ data });
  }

  async findAll(role?: 'AGRONOMO' | 'AGRICULTOR') {
    if (role) {
      return this.databaseService.user.findMany({
        where: {
          role: role,
        },
      });
    } else {
      return this.databaseService.user.findMany();
    }
  }

  async findOne(id: string) {
    if (!id) {
      throw new NotFoundException('User not found');
    }
    return this.databaseService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const {
      currentPassword,
      newPassword,
      cpf,
      crea,
      role,
      password,
      ...otherUpdates
    } = updateUserDto;

    if (password && !currentPassword && !newPassword) {
      throw new Error(
        'Não é permitido atualizar a senha sem informar currentPassword e newPassword.',
      );
    }

    if (currentPassword && newPassword) {
      const user = await this.databaseService.user.findUnique({
        where: { id },
      });
      if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
        throw new Error('Senha atual incorreta.');
      }
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);

    let agronomoData:
      | Prisma.AgronomoUpdateOneWithoutUserNestedInput
      | undefined;
    if (cpf || crea) {
      agronomoData = {
        update: {
          cpf,
          crea,
        },
      };
    }

    const data: Prisma.UserUpdateInput = {
      password: hashPassword,
      ...otherUpdates,
      ...(role && { role }),
      ...(agronomoData && { Agronomo: agronomoData }),
    };

    return this.databaseService.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.databaseService.user.delete({
      where: {
        id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.databaseService.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  async updatePassword(userId: string, newPassword: string) {
    const senha = await bcrypt.hash(newPassword, 10);
    return this.databaseService.user.update({
      where: { id: userId },
      data: {
        password: senha,
      },
    });
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  ValidationPipe,
  Query,
  Ip,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/Create-user.dto';
import { UpdateUserDto } from './dto/Update-user.dto';
import { MyLoggerService } from 'src/my-logger/my-logger.service';
import { Role } from '@prisma/client';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserPayload } from 'src/auth/models/UserPayload';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  private readonly logger = new MyLoggerService(UsersController.name);

  @IsPublic()
  @Post()
  create(@Ip() ip: string, @Body(ValidationPipe) createUserDto: CreateUserDto) {
    this.logger.log(`Request for all users\t${ip}`, UsersController.name);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
    @Ip() ip: string,
    @CurrentUser() currentUser: UserPayload,
    @Query('role') role?: Role,
  ) {
    console.log(currentUser);
    this.logger.log(`Request for all users\t${ip}`, UsersController.name);
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Ip() ip: string, @Param('id', ParseUUIDPipe) id: string) {
    this.logger.log(`Request for all users\t${ip}`, UsersController.name);
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  // eslint-disable-next-line prettier/prettier
  update(
    @Ip() ip: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    this.logger.log(`Request for all users\t${ip}`, UsersController.name);
    return this.usersService.update(id, updateUserDto);
  }

  @IsPublic()
  @Delete(':id')
  remove(@Ip() ip: string, @Param('id', ParseUUIDPipe) id: string) {
    this.logger.log(`Request for all users\t${ip}`, UsersController.name);
    return this.usersService.remove(id);
  }

}


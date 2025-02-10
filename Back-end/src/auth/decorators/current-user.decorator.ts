import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): CreateUserDto => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
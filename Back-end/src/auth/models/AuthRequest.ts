import { Request } from "express";
import { CreateUserDto } from "src/users/dto/create-user.dto";

export interface AuthRequest extends Request {
    user: CreateUserDto;
}
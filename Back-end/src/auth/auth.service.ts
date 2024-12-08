import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';	
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UserPayload } from './models/UserPayload';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    login(user: CreateUserDto): UserToken {
        const payload : UserPayload = {
            sub: Number(user.id),
            email: user.email,
            name: user.name,
        };
        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token : jwtToken,
        }
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user){
            const isPassowordValid = await bcrypt.compare(password, user.password);

            if(isPassowordValid){
                return {
                    ...user,
                    password:undefined,
                };
            }
        }
        throw new Error('Email ou senha não conferem');
    }
}

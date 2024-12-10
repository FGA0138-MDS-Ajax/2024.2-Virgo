import { Controller, Post, HttpCode, HttpStatus, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guarda';

@Controller()
export class AuthController {
    constructor (private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req){
        return this.authService.login(req.user);
    }

    @Post('forgot-password')
    async forgotPassword(@Body('email') email: string) {
    return this.authService.forgotPassword(email);
  }
}

import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/authUser.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post('register')
    @UseInterceptors(NoFilesInterceptor())
    async signUp(@Body() SignInDto : AuthUserDto){
        return this.authService.signUp(SignInDto);
    }

    @Post('login')
    async singIn(@Body() singInDto : AuthUserDto){
        return this.authService.signIn(singInDto.email , singInDto.password);
    }
}

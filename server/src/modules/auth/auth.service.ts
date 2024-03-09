import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../user/users.service';
import * as bcrypt from 'bcrypt';
import { User } from './interfaces/user.interface';

@Injectable()
export class AuthService {

    constructor(
        private jwtService : JwtService,
        private  usersService: UsersService
    ){}

    async signUp(user : User){
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.password,salt);
        user.password = hashedPassword;
        return this.usersService.createUser(user);
    }

    async signIn(email:string, password:string){
        const user = await this.usersService.findOneByEmail(email);
        if(!user) throw new UnauthorizedException();
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) throw new UnauthorizedException();
        const payload = { sub: user.email};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}

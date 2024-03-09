import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('user')
export class UsersController {

    constructor(private readonly usersService : UsersService){}

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Req() req){
        return await this.usersService.findOneByEmail(req.decodedData.sub);
    }

    @UseGuards(AuthGuard)
    @Post('follow/:id')
    async followUser(@Req() req){
        return await this.usersService.followUser(req.decodedData.sub , req.params.id);
    }

    @UseGuards(AuthGuard)
    @Post('unfollow/:id')
    async unfollowUser(@Req() req){
        return await this.usersService.followUser(req.decodedData.sub, req.params.id);
    }

}
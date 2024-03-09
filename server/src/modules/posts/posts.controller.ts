import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { PostsService } from "./posts.services";
import { AuthGuard } from "../common/guards/auth.guard";

@Controller('post')
export class PostsController{

    constructor(private postsService : PostsService){}

    @UseGuards(AuthGuard)
    @Get()
    async getAllPosts(@Req() req){
        return await this.postsService.getAllPosts(req.decodedData.sub); 
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getUserPosts(@Req() req){
        return await this.postsService.getAllUserPost(req.params.id);
    }

    @UseGuards(AuthGuard)
    @Post('createPost')
    async createPost(@Req() req){
        await this.postsService.createPost(req.body,req.decodedData.sub);
    }
}
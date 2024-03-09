import { Injectable } from '@nestjs/common';
import {Post} from './schemas/post.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { UsersService } from '../user/users.service';
import { PostInterface } from './Interfaces/post.interface';

@Injectable()
export class PostsService{

    constructor(
        @InjectModel(Post.name) private readonly postModel : Model<Post>,
        private usersService : UsersService
    ){}

    async getAllPosts(email : string){
        const user = await this.usersService.findOneByEmail(email);
        const userFollowing = user.following;
        return await this.postModel.find({username : {$in : userFollowing}});    
    }

    async getAllUserPost(email:string){
        return await this.postModel.find({email}).populate('userInfo');
    }

    async createPost(post : PostInterface, email : string){
        // PostDto.username = (await this.usersService.findOneByEmail(email)).username;
        post.email = email;
        return await this.postModel.create(post); 
    }
}
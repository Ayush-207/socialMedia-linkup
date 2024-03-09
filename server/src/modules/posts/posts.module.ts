import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.services";
import { UsersModule } from "../user/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "./schemas/post.schema";

@Module({
    controllers : [PostsController],    
    providers : [PostsService],
    imports : [UsersModule,
    MongooseModule.forFeature([{name : Post.name, schema : PostSchema}])]
})

export class  PostsModule {}  
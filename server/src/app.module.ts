import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersModule } from './modules/user/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [PostsModule,AuthModule, UsersModule,MongooseModule.forRoot('mongodb+srv://agayushgoyal:ZSt9gmHUYRpZyMMu@cluster1.19advok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')],
})
export class AppModule {}

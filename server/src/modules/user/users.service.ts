import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private readonly userModel : Model<User>){}

    async createUser(createUserDto: any): Promise<User | undefined> {
        return await this.userModel.create(createUserDto);
    }

    async findOneByEmail(email : string){
        return await this.userModel.findOne({email});
    }

    async followUser(userEmail : string, targetId: string){
        
        const targetUser = await this.userModel.findOne({username : targetId});
        const user = await this.userModel.findOne({email: userEmail});
        user.following.set(targetUser.username, targetUser._id);
        targetUser.followers.set(user.username, user._id);
        await user.save();
        await targetUser.save();
    }

    async unfollowUser(userEmail : string, targetId : string){
        const targetUser = await this.userModel.findOne({username : targetId});
        const user = await this.userModel.findOne({email: userEmail});
        user.following.delete(targetUser.username);
        targetUser.followers.delete(user.username);
        await user.save();
        await targetUser.save();
    }
}
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, { HydratedDocument }  from 'mongoose';
import { Types } from 'mongoose';
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required : true})
  firstname: string;

  @Prop({required : true})
  lastname: string;

  @Prop({required : true})
  username : string;

  @Prop({required : true})
  email : string;

  @Prop({required : true}) 
  password : string;

  @Prop({type:Map, of:{key:String, type:mongoose.Schema.Types.ObjectId, ref : 'User'}}) 
  followers : Map<string,Types.ObjectId>
  
  @Prop({type:Map, of:{key:String, type:mongoose.Schema.Types.ObjectId, ref : 'User'}}) 
  following : Map<string,Types.ObjectId>
}

export const UserSchema = SchemaFactory.createForClass(User);

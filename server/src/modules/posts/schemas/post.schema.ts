import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({required : true})
  imageUrl : string;

  @Prop({required : true})
  caption : string;

  @Prop({required : true})
  email : string;

  @Prop({required : true, type : Date})
  date : Date;

  @Prop({type : Number})
  likes : number;

}

export const PostSchema = SchemaFactory.createForClass(Post);

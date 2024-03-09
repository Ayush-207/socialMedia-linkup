import {IsString} from 'class-validator';

export class PostDto {

    @IsString()
    readonly caption : string;

    @IsString()
    readonly imageUrl : string;

    @IsString()
    readonly email : string;

    @IsString()
    readonly date : string;

    @IsString()
    readonly likes : number;

}
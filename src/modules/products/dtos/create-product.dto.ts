import { Injectable } from "@nestjs/common";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

@Injectable()
export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @Length(1, 50)
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(20, 100)
    description: string;

    @IsNotEmpty()
    @IsNumber({})
    number: number;
}
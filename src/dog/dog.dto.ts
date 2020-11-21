import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsOptional } from "class-validator";
import { Dog } from "./dog.schema";

export class CreateDogDto extends Dog {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsString()
  breed: string;
}

export class UpdateDogDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @ApiProperty({ required: false })
  @IsOptional()
  age?: number;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  breed?: string;
}

export class FilterDogDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @ApiProperty({ required: false })
  @IsOptional()
  age?: number;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  breed?: string;
}

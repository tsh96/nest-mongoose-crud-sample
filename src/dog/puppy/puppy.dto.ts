import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional } from "class-validator";
import { Puppy } from "./puppy.schema";

export class CreatePuppyDto extends Puppy {
  @ApiProperty()
  @IsString()
  name: string;
}

export class UpdatePuppyDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;
}

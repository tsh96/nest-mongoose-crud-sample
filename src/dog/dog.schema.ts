import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Document } from 'mongoose';

export type DogDocument = Dog & Document;

@Schema()
export class Dog {
  @ApiProperty()
  @Prop()
  @IsString()
  name: string;

  @Prop()
  @ApiProperty()
  @IsNumber()
  age: number;

  @Prop()
  @ApiProperty()
  @IsString()
  breed: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
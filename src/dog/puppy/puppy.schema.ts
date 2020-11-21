import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export type PuppyDocument = Puppy & Document;

@Schema()
export class Puppy {
  @ApiProperty()
  @Prop()
  @IsString()
  name: string;
}

export const PuppySchema = SchemaFactory.createForClass(Puppy);
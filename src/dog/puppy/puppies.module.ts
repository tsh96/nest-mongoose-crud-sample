import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Puppy, PuppySchema } from './puppy.schema';
import { PuppiesController } from './puppies.controller';
import { PuppiesService } from './puppies.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Puppy.name, schema: PuppySchema }]),
  ],
  controllers: [PuppiesController],
  providers: [PuppiesService],
})
export class PuppiesModule { }
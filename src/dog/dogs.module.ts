import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Dog, DogSchema } from './dog.schema';
import { DogsController } from './dogs.controller';
import { DogsService } from './dog.service';
import { PuppiesModule } from './puppy/puppies.module';
import { AuthModule } from 'src/auth/auth.module';
import { AccessControlModule } from 'src/access-control/access-control.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }]),
    PuppiesModule,
    AccessControlModule,
    AuthModule
  ],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule { }
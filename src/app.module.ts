import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessControlModule } from './access-control/access-control.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dog/dogs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-mongoose-crud-example'),
    DogsModule,
    AccessControlModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { ParseArrayPipe, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthResource, Crud, CrudController } from '@tsh96/nest-mongoose-crud';
import { PuppiesService } from './puppies.service';

@ApiBearerAuth()
@AuthResource('puppy')
@Crud('puppies', { crudService: PuppiesService, ParseArrayPipe, ParseIntPipe })
export class PuppiesController extends CrudController<PuppiesService, any> {
  constructor(readonly service: PuppiesService) {
    super(service)
  }
}
import { ParseArrayPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthResource, Crud, CrudController, RolesGuard } from '@tsh96/nest-mongoose-crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DogsService } from './dog.service';

@ApiBearerAuth()
@AuthResource('dog')
@UseGuards(JwtAuthGuard, RolesGuard)
@Crud('dogs', { crudService: DogsService, ParseArrayPipe, ParseIntPipe })
export class DogsController extends CrudController<DogsService, any> {
  constructor(readonly service: DogsService) {
    super(service)
  }
}
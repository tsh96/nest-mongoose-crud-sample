import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Puppy, PuppyDocument } from './puppy.schema';
import { CreatePuppyDto, UpdatePuppyDto } from './puppy.dto';
import { CrudInjectable, CrudService, } from '@tsh96/nest-mongoose-crud'

@CrudInjectable({
  createDto: CreatePuppyDto,
  updateDto: UpdatePuppyDto,
  mongooseModel: Puppy,
  filterQuery: UpdatePuppyDto
})
export class PuppiesService extends CrudService {
  constructor(@InjectModel(Puppy.name) puppyModel: Model<PuppyDocument>) {
    super(puppyModel)
  }
}
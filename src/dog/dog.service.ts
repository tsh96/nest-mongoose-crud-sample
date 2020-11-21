import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dog, DogDocument } from './dog.schema';
import { CreateDogDto, FilterDogDto, UpdateDogDto } from './dog.dto';
import { CrudInjectable, CrudService, } from '@tsh96/nest-mongoose-crud'

@CrudInjectable({
  createDto: CreateDogDto,
  updateDto: UpdateDogDto,
  mongooseModel: Dog,
  filterQuery: FilterDogDto
})
export class DogsService extends CrudService {
  constructor(@InjectModel(Dog.name) dogModel: Model<DogDocument>) {
    super(dogModel)
  }
}
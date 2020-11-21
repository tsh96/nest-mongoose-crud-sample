import { Module, UseGuards } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessControl, AccessControlController, AccessControlSchema, AccessControlService as BaseAccessControlService, AccessControlModule as BaseAccessControlModule, AccessControlDocument, RolesGuard } from '@tsh96/nest-mongoose-crud';
import { Model } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


class AccessControlService extends BaseAccessControlService {
  constructor(roleModel: Model<AccessControlDocument>) {
    super(roleModel)
  };
  checkRole(): Promise<boolean> {
    return Promise.resolve(true);
  };
}

UseGuards(JwtAuthGuard, RolesGuard)(AccessControlController)

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AccessControl.name, schema: AccessControlSchema }]),
  ],
  providers: [AccessControlService],
  exports: [AccessControlService],
  controllers: [AccessControlController]
})
export class AccessControlModule extends BaseAccessControlModule { }

import { Module } from '@nestjs/common';
import { UserService } from './user.service.client';

@Module({
  exports: [UserService],
  providers: [UserService],
})
export class UserModuleClient {}

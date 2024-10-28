import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
import { userConfig } from './config/user-service.config';
import { UserModuleClient } from './client/user.module.client';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [userConfig],
    }),
    UserModuleClient,
  ],
  controllers: [UserController],
})
export class AppModule {}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from './dtos/user.dto';
import { UserService } from './client/user.service.client';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() body: UserCreateDto): Promise<void> {
    return this.service.create(body);
  }

  @Get()
  async list(): Promise<any[]> {
    return this.service.list();
  }
}

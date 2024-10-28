import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientNats } from '@nestjs/microservices';
import { UserCreate } from './interfaces/create.interface';
import { lastValueFrom } from 'rxjs';
import { UserCommands, UserEvents } from 'src/enums/user.enum';
import { UserResponse } from 'src/interfaces/user.interfaces';

@Injectable()
export class UserService {
  readonly #_client: ClientNats;
  readonly #_timeout: number;
  readonly #_implicitConnect: boolean;

  constructor(private readonly config: ConfigService) {
    this.#_client = new ClientNats({
      user: '',
      pass: '',
      servers: ['nats://localhost:4222'],
    });

    this.#_timeout = 5000;
    // this.#_implicitConnect = this.config.get<boolean>(
    //   'product.implicitConnect',
    //   false,
    // );
  }

  async create(payload: UserCreate): Promise<void> {
    try {
      await lastValueFrom(this.#_client.send(UserEvents.CREATE_USER, payload));
    } catch (error) {
      throw new Error(`Ошибка при создании пользователя: ${error.message}`);
    }
  }

  async list(): Promise<UserResponse[]> {
    try {
      const response = await lastValueFrom(
        this.#_client.send(UserCommands.LIST_USER, {}),
      );

      return response;
    } catch (error) {
      throw new Error(`Ошибка при получении пользователя: ${error.message}`);
    }
  }
}

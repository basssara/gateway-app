import { IsNotEmpty, IsString } from 'class-validator';
import { UserCreate } from 'src/client/interfaces/create.interface';

export class UserCreateDto implements UserCreate {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

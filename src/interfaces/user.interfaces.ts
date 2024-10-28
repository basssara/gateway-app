export class UserCreateRequest {
  email: string;
  username: string;
  password: string;
}

export class UserReadRequest {
  id: string;
}

export class UserUpdateRequest {
  id: string;
}

export class UserDeleteRequest {
  id: string;
}

export class UserResponse {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

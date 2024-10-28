import { registerAs } from '@nestjs/config';

export interface userServiceConfig {
  server: string[];
}

export const userConfig = registerAs('userService', () => ({
  servers: process.env.NATS_SERVERS?.split(','),
}));

import { HttpStatus } from '@nestjs/common';

export declare interface ExceptionParams {
  status: HttpStatus;
  message: string;
  details?: unknown;
  exception?: string;
}

export declare class Exception extends Error {
  constructor(params: ExceptionParams);
  getStatus(): HttpStatus;
  getMessage(): string;
  getDetails(): unknown;
  getException(): string;
}

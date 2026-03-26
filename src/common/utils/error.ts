import { HttpException, HttpStatus } from '@nestjs/common';

export function error(
  message: string,
  statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
) {
  return new HttpException(message, statusCode);
}

export function notFound(message: string) {
  return error(message, HttpStatus.NOT_FOUND);
}

export function unauthorized(message: string) {
  return error(message, HttpStatus.UNAUTHORIZED);
}

export function forbidden(message: string) {
  return error(message, HttpStatus.FORBIDDEN);
}

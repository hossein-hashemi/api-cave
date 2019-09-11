import { Injectable } from '@nestjs/common';

@Injectable()
export class CellarService {
  getHello(): string {
    return 'Hello World!';
  }
}

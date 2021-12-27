import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(id?: string): string {
    return `Hello World ${id}`;
  }
}

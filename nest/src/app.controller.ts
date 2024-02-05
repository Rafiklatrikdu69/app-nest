/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
    // eslint-disable-next-line prettier/prettier
    getHello() {
    return this.appService.getHello();
  }
}

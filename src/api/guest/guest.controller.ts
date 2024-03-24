import { Controller, Get, Post } from '@nestjs/common';

@Controller('')
export class GuestController {
  @Get('/providers')
  public getProviders() {
    return [];
  }

  @Post('subscribe')
  public subscribe(): void {}
}

import { Controller, Get, Patch } from '@nestjs/common';

@Controller('api/user')
export class UserController {
  @Get('profile')
  public getProfile(): void {}

  @Patch('profile')
  public updateProfile(): void {}
}

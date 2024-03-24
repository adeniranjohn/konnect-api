import { Controller, Post } from '@nestjs/common';

@Controller('api/auth')
export class AuthController {
  @Post('signup')
  public signup(): void {}

  @Post('signin')
  public signin(): void {}

  @Post('resetpassword')
  public resetpassword(): void {}

  @Post('forgotpassword')
  public forgotpassword(): void {}

}

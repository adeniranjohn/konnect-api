import { IsNotEmpty } from 'class-validator';

export class SigninDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;
  
}

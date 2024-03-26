import { AuthType, Role } from 'src/config/models/auth.model';

export class SignupDTO {
  email: string;
  phone: string;
  password: string;
  role: Role;
  authType: AuthType;
  externalId: string;
  resetToken: string;
}

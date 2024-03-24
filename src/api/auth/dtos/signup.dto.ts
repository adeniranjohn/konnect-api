import { OauthType, Role } from 'src/config/models/auth.model';

export class SignupDTO {
  email: string;
  phone: string;
  password: string;
  role: Role;
  authType: OauthType;
  externalId: string;
}

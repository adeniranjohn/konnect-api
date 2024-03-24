export interface Auth {
  email: string;
  phone: string;
  password: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
  verify: boolean;
  authType: OauthType;
  externalId: string;
}

export enum Role {
  USER = 'USER',
  PROVIDER = 'PROVIDER',
  MANAGER = 'MANAGER',
  SUPERMANAGER = 'SUPERMANAGER',
}

export enum OauthType {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  PASSWORD = 'PASSWORD',
}

import { IsEmail, IsPhoneNumber, IsStrongPassword } from 'class-validator';
import { AuthType, Role } from 'src/config/models/auth.model';
import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phone: string;

  @IsStrongPassword()
  @Column()
  password: string;

  @Column()
  role: Role;

  @Column()
  authType: AuthType;

  @Column()
  extenralId: string;

}

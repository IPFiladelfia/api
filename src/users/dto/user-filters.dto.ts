import { IsEmail, IsOptional } from 'class-validator';

export class UserFilters {
  @IsEmail()
  @IsOptional()
  email: string;
}

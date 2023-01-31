import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { UserType } from 'src/shared/enums';

@InputType()
export class CreateUserInput {
  @IsEmail('O email precisa estar em um formato válido')
  @Field()
  email: string;

  @IsPhoneNumber('BR', {
    message: 'O telefone precisa estar em um formato válido (DDD + Número)',
  })
  @Field({ nullable: true })
  @IsOptional()
  phone?: string;

  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  password: string;

  @IsEnum(UserType)
  @Field({ nullable: true })
  @IsOptional()
  userType?: UserType;
}

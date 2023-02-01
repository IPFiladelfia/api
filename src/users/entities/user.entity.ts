import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/shared/entities/BaseEntity';
import { UserType } from 'src/shared/enums';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field({ defaultValue: UserType.USER })
  @Column({ default: UserType.USER })
  userType: UserType;
}

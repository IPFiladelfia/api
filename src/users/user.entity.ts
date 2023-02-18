import { ObjectType, Field } from '@nestjs/graphql';
import { UserType } from 'src/shared/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Field()
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Field()
  @Column({ type: 'varchar', length: 60 })
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true, type: 'varchar', length: 15 })
  phone?: string;

  @Field({ defaultValue: UserType.USER })
  @Column({ default: UserType.USER, type: 'enum', enum: UserType })
  type: UserType;
}

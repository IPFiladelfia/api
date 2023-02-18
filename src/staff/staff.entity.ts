import { ObjectType, Field } from '@nestjs/graphql';
import { StaffTitle, PageStatus } from 'src/shared/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('staff_member')
@ObjectType()
export class StaffMember {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 20, nullable: true })
  title?: StaffTitle;

  @Field({ nullable: true })
  @Column({ type: 'varchar', length: 255, nullable: true })
  thumbnailUrl?: string;

  @Field({ defaultValue: PageStatus.DRAFT })
  @Column({ type: 'enum', enum: PageStatus, default: PageStatus.DRAFT })
  status: PageStatus;
}

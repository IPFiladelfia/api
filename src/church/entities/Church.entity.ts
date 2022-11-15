import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Church {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}

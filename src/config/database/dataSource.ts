import { StaffMember } from 'src/staff/entities/staff.entity';
import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateUsersTable1675211367487 } from './migrations/1675211367487-CreateUsersTable';
import { CreateStaffMembersTable1675363179516 } from './migrations/1675363179516-CreateStaffMembersTable';

const migrations = [
  CreateUsersTable1675211367487,
  CreateStaffMembersTable1675363179516,
];

const entities = [User, StaffMember];

export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT),
  database: 'filadelfia-local-db',
  migrations,
  entities,
});

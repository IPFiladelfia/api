import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateUsersTable1675211367487 } from './migrations/1675211367487-CreateUsersTable';

export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT),
  database: 'filadelfia-local-db',
  migrations: [CreateUsersTable1675211367487],
  entities: [User],
});

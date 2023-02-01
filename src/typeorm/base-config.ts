import { CreateUsersTable1675211367487 } from 'src/database/migrations/1675211367487-CreateUsersTable';
import { User } from 'src/users/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const entities = [User];

const migrations = [CreateUsersTable1675211367487];

const config: PostgresConnectionOptions = {
  entities,
  migrations,
  type: 'postgres',
};

export { config };

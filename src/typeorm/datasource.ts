import { DataSource } from 'typeorm';
import { config } from './base-config';

export default new DataSource({
  ...config,
  host: 'localhost',
  port: 5432,
  username: 'guilhermeramos',
  password: 'guilhermeramos',
  database: 'filadelfia-local-db',
  migrationsRun: true,
  synchronize: false,
});

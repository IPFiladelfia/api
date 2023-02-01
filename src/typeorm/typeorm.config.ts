import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './base-config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  ...config,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrationsRun: true,
  synchronize: false,
};

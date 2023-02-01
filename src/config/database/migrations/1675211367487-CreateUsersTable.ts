import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1675211367487 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(
      `CREATE TYPE USER_TYPE_ENUM as ENUM ('superuser', 'admin', 'user');`,
    );
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS users (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid()::uuid,
            name varchar(100) NOT NULL,
            email varchar(255) UNIQUE NOT NULL,
            password varchar(60) NOT NULL,
            phone varchar(15),
            "userType" USER_TYPE_ENUM NOT NULL
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users`);
    await queryRunner.query(`DROP TYPE IF EXISTS USER_TYPE_ENUM`);
  }
}

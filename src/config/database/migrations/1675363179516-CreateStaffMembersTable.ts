import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStaffMembersTable1675363179516
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE PAGE_STATUS_ENUM as ENUM ('draft', 'published', 'hidden');`,
    );
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS staff_member (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid()::uuid,
      name varchar(100),
      description varchar(255),
      title varchar(20),
      thumbnailUrl varchar(255),
      status PAGE_STATUS_ENUM NOT NULL DEFAULT 'draft'
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS staff_member`);
    await queryRunner.query(`DROP TYPE IF EXISTS PAGE_STATUS_ENUM`);
  }
}

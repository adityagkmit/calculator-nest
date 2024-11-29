import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveUniqueConstraintEmail1730307480675 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" DROP CONSTRAINT IF EXISTS "operation_email_key"
    `);

    await queryRunner.query(`
      ALTER TABLE "operation" ALTER COLUMN "email" DROP NOT NULL
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" ADD CONSTRAINT "operation_email_key" UNIQUE ("email")
    `);
  }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveConstraintEmail1730307247130 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" DROP CONSTRAINT IF EXISTS "UQ_operation_email"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" ADD CONSTRAINT "UQ_operation_email" UNIQUE ("email")
    `);
  }
}

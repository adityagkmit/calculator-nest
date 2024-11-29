import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTimestampsColumns1730305732690 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" RENAME COLUMN "createdat" TO "created_at"
    `);
    await queryRunner.query(`
      ALTER TABLE "operation" RENAME COLUMN "updatedat" TO "updated_at"
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "operation" RENAME COLUMN "created_at" TO "createdAt"
    `);
    await queryRunner.query(`
      ALTER TABLE "operation" RENAME COLUMN "updated_at" TO "updatedAt"
    `);
  }

}

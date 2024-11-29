import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTableOperation1730289771158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        ALTER TABLE "operation"
        ADD operator VARCHAR(255) NOT NULL
    `);
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "operation"`);
    }

}

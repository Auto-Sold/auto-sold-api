import { MigrationInterface, QueryRunner } from "typeorm";

export class isseller1678306611091 implements MigrationInterface {
    name = 'isseller1678306611091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isSeller" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isSeller"`);
    }

}

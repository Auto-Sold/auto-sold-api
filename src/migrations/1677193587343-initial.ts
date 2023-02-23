import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677193587343 implements MigrationInterface {
    name = 'initial1677193587343'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "bio" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "bio"`);
    }

}

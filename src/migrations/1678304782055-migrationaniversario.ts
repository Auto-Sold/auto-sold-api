import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationaniversario1678304782055 implements MigrationInterface {
    name = 'migrationaniversario1678304782055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zipCode" character varying(8) NOT NULL, "state" character varying(100) NOT NULL, "city" character varying(100) NOT NULL, "street" character varying(100) NOT NULL, "number" character varying NOT NULL, "complement" character varying(100) NOT NULL, CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "dateBirth" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cpf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateBirth"`);
        await queryRunner.query(`DROP TABLE "Address"`);
    }

}

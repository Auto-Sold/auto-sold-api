import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677079536785 implements MigrationInterface {
    name = 'initial1677079536785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehiclesImages" ("id" SERIAL NOT NULL, "url" character varying array NOT NULL DEFAULT '{}', CONSTRAINT "PK_e30f6c283761b643fa366be9f2d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "announceType" character varying NOT NULL, "title" character varying(255) NOT NULL, "year" character varying NOT NULL, "km" integer NOT NULL, "price" numeric(10,2) NOT NULL, "description" text, "vehicleType" character varying NOT NULL, "image" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vehiclesImagesId" integer, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userSeller" ("id" uuid NOT NULL, "nameSeller" character varying(225) NOT NULL, "email" character varying(225) NOT NULL, "password" character varying(100) NOT NULL, "telephone" character varying(15) NOT NULL, "cnpj" character varying(14) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f14797de32bafa2ff88878338fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "userClient" ("id" uuid NOT NULL, "completeName" character varying(225) NOT NULL, "email" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "telephone" character varying(15) NOT NULL, "password" character varying(100) NOT NULL, "cpf" integer NOT NULL, CONSTRAINT "PK_a72343cdcb0d76ceef87d2d0e47" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_c9a4452964c4129f5cbf4210754" FOREIGN KEY ("vehiclesImagesId") REFERENCES "vehiclesImages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_c9a4452964c4129f5cbf4210754"`);
        await queryRunner.query(`DROP TABLE "userClient"`);
        await queryRunner.query(`DROP TABLE "userSeller"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TABLE "vehiclesImages"`);
    }

}

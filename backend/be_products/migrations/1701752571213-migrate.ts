import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1701752571213 implements MigrationInterface {
    name = 'Migrate1701752571213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isPublic" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "isPublic" DROP DEFAULT`);
    }

}

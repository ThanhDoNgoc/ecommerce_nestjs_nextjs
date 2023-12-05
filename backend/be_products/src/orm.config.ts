import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Products, Categories } from './entities';
dotenv.config();

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Products, Categories],
  synchronize: false,
};

export default ormconfig;


//This connectionSource is use for migration to database (not require in source code)
export const connectionSource = new DataSource({
  ...ormconfig,
  migrations: ['./migrations/*.ts'],
  migrationsTableName: 'migrations_product',
} as DataSourceOptions);

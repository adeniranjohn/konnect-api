import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const postgreConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'endlog53',
  database: 'konnectDB',
  entities: [],
  synchronize: true,
};

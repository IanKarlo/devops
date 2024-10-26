import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";

const entitiesPath = process.env.NODE_ENV !== 'Production' ? './src/**/entity.ts' : './dist/**/entity.js';
const migrationsPath = process.env.NODE_ENV !== 'Production'? './src/**/migrations/*.ts' : './dist/**/migrations/*.js';

const MainDataSource = new DataSource({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    entities: [entitiesPath],
    migrations: [migrationsPath],
    synchronize: true,
    type: 'postgres',
})

export const getRepository = <T extends ObjectLiteral>(entity: EntityTarget<T>): Repository<T> => {
    return MainDataSource.getRepository(entity)
  }

export default MainDataSource;
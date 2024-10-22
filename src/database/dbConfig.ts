import { Dialect, Sequelize } from 'sequelize';
import { envs } from '../config/envs';

export const sequelize = new Sequelize(
    envs.dbName as string, 
    envs.dbUser as string,
    envs.dbPass, {
        dialect: envs.dbDialect as Dialect,
        host: envs.dbHost,
        port: envs.dbPort,
    }
)
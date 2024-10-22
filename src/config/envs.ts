import 'dotenv/config';

export const envs = {
    port: process.env.PORT as unknown as number,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    dbPort: process.env.DB_PORT as unknown as number,
    dbHost: process.env.DB_HOST,
    dbDialect: process.env.DB_DIALECT,
};
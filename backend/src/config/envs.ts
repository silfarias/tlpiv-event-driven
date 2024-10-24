import 'dotenv/config';

if (!process.env.MONGO_URL) {
    throw new Error('Missing critical environment variables: MONGO_URL');
}

export const envs = {
    port: +process.env.PORT!,
    MONGO_URL: process.env.MONGO_URL!,
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED
} as const;
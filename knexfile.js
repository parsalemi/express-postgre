import dotenv from 'dotenv';
dotenv.config({path: `.env.${process.env.NODE_ENV}`});

const is_docker = process.env.IS_DOCKER === 'true';

const development = {
  client: 'postgresql',
  connection: is_docker ? {
    host: process.env.DOCKER_DB_HOST || process.env.DB_HOST,
    port: process.env.DOCKER_DB_PORT || process.env.DB_PORT,
    user: process.env.DOCKER_DB_USER || process.env.DB_USERNAME || process.env.DB_USER,
    password: process.env.DOCKER_DB_PWD || process.env.DB_PASSWORD,
    database: process.env.DOCKER_DB_NAME || process.env.DB_NAME,
  } : {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME || process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './db/seeds',
  },
  pool: {
    min: 2,
    max: 10
  }
}
const production = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: `${process.env.DB_PASSWORD}`,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './db/seeds'
  },
  pool: {
    min: 2,
    max: 10
  }
}

export default {
  development,
  production
}
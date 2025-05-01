import dotenv from 'dotenv';
dotenv.config();

const development = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Ps248621379',
    database: 'portfoliodb1',
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
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
  pool: {
    min: 2,
    max: 10
  }
}

export default {
  development,
  production
}
import knex from 'knex';
import CloudflareD1Dialect from 'cloudflare-d1-http-knex';

const d1Config = {
  client: CloudflareD1Dialect,
  connection: {
    account_id: process.env.CF_ACCOUNT_ID,
    database_id: process.env.CF_DB_ID,
    key: process.env.CF_API_TOKEN,
  },
  useNullAsDefault: true,
}

const localConfig = {
  client: 'postgresql',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Ps248621379',
    database: 'portfoliodb1', 
  },
  pool: {
    min: 2,
    max: 10
  }
}

const config = process.env.NODE_ENV == 'production' ? d1Config : localConfig;
const connectedKnex = knex(config);

export default connectedKnex;
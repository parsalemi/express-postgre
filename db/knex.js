import knex from 'knex';
import knexConfig from '../knexfile.js';

const config = knexConfig[process.env.NODE_ENV];
const connectedKnex = knex(config);

export default connectedKnex;
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const fs = require('fs');
const path = require('path');

exports.seed = async function(knex) {
  return knex.transaction(async knx => {
    await knx('users').del();
    await knx('users').insert([
      {username: 'parsalemi', password: 'ps248621379', age: 24, gender: 'male'}
    ]);
    
    const productSql = fs.readFileSync(path.join(__dirname, './SQL/products.sql'), 'utf-8');
    await knx('products').del();
    await knx.raw(productSql);
  })

};

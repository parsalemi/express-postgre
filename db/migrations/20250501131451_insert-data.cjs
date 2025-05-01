/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const fs = require('fs')
const path = require('path')
exports.up = function(knex) {
  const sqlPath = 'C:/Users/hhh/Desktop/products.sql'
  const sql = fs.readFileSync(sqlPath, 'utf-8');
  return knex.raw(sql);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw(`DROP TABLE IF EXISTS products CASCADE`);
};

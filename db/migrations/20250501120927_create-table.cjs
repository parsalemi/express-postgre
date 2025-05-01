/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('products', (table) => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('description');
    table.text('brand');
    table.text('category').notNullable();
    table.text('code').unique();
    table.text('image');
    table.text('thumbnail');
    table.decimal('price', 10, 2).notNullable();
    table.decimal('discount', 4, 2).defaultTo(0);
    table.integer('stock').defaultTo(0);
    table.integer('weight');
    table.decimal('rating', 3, 2).defaultTo(0);
    table.text('tags');
    table.text('reviews');
    
    // Indexes for better performance
    // table.index('category');
    // table.index('price');
    // table.index('rating');
  })
  .createTable('users', (table) => {
    table.increments('id').primary();
    table.text('username').notNullable().unique();
    table.text('password').notNullable();
    table.smallint('age');
    table.text('gender');
  })
  .createTable('carts', (table) => {
    table.increments('id').primary();
    table.text('order');
    table.date('date').defaultTo(knex.fn.now());
    table.boolean('purchased').defaultTo(false);
    // Foreign key to users
    table.integer('userid').unsigned().notNullable();
    table.foreign('userid').references('id').inTable('users');
    
    // Indexes
    table.index('userid');
    table.index('date');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products').dropTable('users').dropTable('carts')
};

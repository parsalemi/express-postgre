import knex from './knex.js';

function getAllProducts(limit, offset) {
  return knex('products').select('*').limit(limit).offset(offset);
}

function getProductById(id){
  return knex('products').where('id', id).select('*');
}

function getProductByPrice(acsORdesc){
  return knex('products').orderBy('price', acsORdesc);
}

function getProductsByCategory(category){
  return knex('products').where('category', category).select('*');
}
function getProductByName(product){
  return knex('products').select('*').where('name', 'ilike', `%${product}%`);
}

export default {
  getAllProducts,
  getProductById,
  getProductByPrice,
  getProductsByCategory,
  getProductByName,
}
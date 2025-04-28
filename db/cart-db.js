import knex from './knex.js';

function getCart(userId){
  return knex('carts').select('id', 'userid', 'purchased', 'order').where('userid', userId).where('purchased', false).first();
}

function addToCart(userId, order){
  return knex('carts').where('userid', userId).insert({
    'order': order,
    'userid': userId,
    'purchased': false,
    'date': '2025-04-27'
  });
}

function purchaseCart(userId){
  return knex('carts').where('userid', userId).where('purchased', false).update({
    'purchased': true,
    'userid': userId,
    'date': new Date().toLocaleString()
  });
}

function deleteCart(userId){
  return knex('carts').where('userid', userId).where('purchased', false).del();
}

function updateCart(userId, order){
  return knex('carts').where('userid', userId).where('purchased', false).update({'order': order});
}

function getOrderHistory(userId){
  return knex('carts').where('userid', userId).where('purchased', true).select('id', 'order', 'date');
}

export default {
  getCart,
  addToCart,
  purchaseCart,
  deleteCart,
  updateCart,
  getOrderHistory,
}
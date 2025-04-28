import knex from './knex.js';

function getCart(userId){
  return knex('carts').select('id', 'userid', 'purchased', 'order').where('userid', userId).where('purchased', false).first();
}

function addToCart(userId, order){
  return knex('carts').where('userid', userId).insert({
    'order': order,
    'userid': userId,
    'purchased': false,
    'date': formatDateForDB(new Date().toLocaleDateString())
  });
}

function purchaseCart(userId){
  return knex('carts').where('userid', userId).where('purchased', false).update({
    'purchased': true,
    'userid': userId,
    'date': formatDateForDB(new Date().toLocaleDateString())
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

function formatDateForDB(date){
  let arrDate = date.split('/');
  return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`;
}
export default {
  getCart,
  addToCart,
  purchaseCart,
  deleteCart,
  updateCart,
  getOrderHistory,
}
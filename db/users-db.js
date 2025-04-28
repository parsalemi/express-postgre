import knex from './knex.js';

function getAllUsers() {
  return knex("users").select(['id', 'username', 'age', 'gender']);
}

function getUserById(id) {
  return knex('users').where('id', id).select('*').first();
}

function getUserByUsername(username) {
  return knex('users').where('username', username).select('*').first();
}
function createUser(user) {
  return knex("users").insert(user);
}

function deleteUser(id) {
  return knex("users").where("id", id).del();
}

function updateUser(id, user) {
  return knex("users").where("id", id).update(user);
}
export default {
  getAllUsers,
  getUserById,
  getUserByUsername,
  createUser,
  deleteUser,
  updateUser
}
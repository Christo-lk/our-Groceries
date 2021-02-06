const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

module.exports = {
  getUsers,
  getUserItems,
  getAllItems
}

function getUsers () {
  return db('users')
}

function getUserItems (id) {
  // id = 2
  return db('users')
    .join('groceries', 'users.id', 'user_id')
    .where('users.id', id)
    .select('item', 'user_id as userId')
}

function getAllItems (id) {
  return db('users')
    .join('groceries', 'users.id', 'user_id')
    .where('users.id', id)
    .select('item', 'user_id as userId')
}

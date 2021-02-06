exports.up = function (knex) {
  return knex.schema.createTable('groceries', (table) => {
    table.increments('id')
    table.integer('user_id').references('users.id')
    table.string('item')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('groceries')
}

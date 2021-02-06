exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Brad' },
        { id: 2, name: 'Tommy' },
        { id: 3, name: 'Christo' },
        { id: 4, name: 'Ben' },
        { id: 5, name: 'Household' }
      ])
    })
}

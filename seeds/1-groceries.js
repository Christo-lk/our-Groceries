exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groceries').del()
    .then(function () {
      // Inserts seed entries
      return knex('groceries').insert([
        { id: 1, user_id: '1', item: 'potatoes' },
        { id: 2, user_id: '1', item: 'butter' },
        { id: 3, user_id: '1', item: 'sriracha' },
        { id: 4, user_id: '1', item: 'BBQ sauce' },
        { id: 5, user_id: '1', item: 'apple' },
        { id: 6, user_id: '1', item: 'peaches' },
        { id: 7, user_id: '1', item: 'carrots' },
        { id: 8, user_id: '1', item: 'dishwash liquid' },
        { id: 9, user_id: '2', item: 'window cleaner' },
        { id: 10, user_id: '1', item: 'sponge' },
        { id: 11, user_id: '2', item: 'pasta' },
        { id: 12, user_id: '2', item: 'coffee' },
        { id: 13, user_id: '2', item: 'tea' },
        { id: 14, user_id: '3', item: 'sausage' },
        { id: 15, user_id: '3', item: 'noodles' },
        { id: 16, user_id: '3', item: 'sardines' },
        { id: 17, user_id: '4', item: 'canned peaches' },
        { id: 18, user_id: '4', item: 'chicken breast' },
        { id: 19, user_id: '4', item: 'rice' },
        { id: 20, user_id: '5', item: 'beans' },
        { id: 21, user_id: '5', item: 'spaghetti' },
        { id: 22, user_id: '5', item: 'tinned tomato' }
      ])
    })
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "bars"; ALTER SEQUENCE bars_id_seq RESTART WITH 5;')
    .then(function () {
      // Inserts seed entries
      return knex('bars').insert([
        {
          id: 1,
          name: 'My Brother\'s Bar',
          location: '2376 15th St.',
          user_count: 0
        },
        {
          id: 2,
          name: 'Linger',
          location: '2030 W 30th Ave',
          user_count: 0
        },
        {
          id: 3,
          name: 'Highland Tap and Burger',
          location: '2219 W 32nd Ave.',
          user_count: 0
        },
        {
          id: 4,
          name: 'Forest Room 5',
          location: '2532 15th St',
          user_count: 0
        }
      ])
    })
}

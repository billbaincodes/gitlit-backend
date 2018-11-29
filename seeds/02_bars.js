
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "bars"; ALTER SEQUENCE bars_id_seq RESTART WITH 4;')
    .then(function () {
      // Inserts seed entries
      return knex('bars').insert([
        {
          id: 1,
          name: 'My Brother\'s Bar',
          location: '2376 15th St.',
          star_avg: 1,
          user_count: 0
        },
        {
          id: 2,
          name: 'Linger',
          location: '2030 W 30th Ave',
          star_avg: 5,
          user_count: 0
        },
        {
          id: 3,
          name: 'Highland Tap and Burger',
          location: '2219 W 32nd Ave.',
          star_avg: 3,
          user_count: 0
        }
      ])
    })
}

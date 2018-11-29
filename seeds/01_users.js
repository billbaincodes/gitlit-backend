const bcrypt = require('bcryptjs');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
            "id": 1,
            "first": "Evan",
            "last": "Apodaca",
            "email": "evapodaca87@gmail.com",
            "username": "evapodaca87",
            "password": bcrypt.hashSync("evan",12),
            "active": false
        },
        {
            "id": 2,
            "first": "Bill",
            "last": "Bain",
            "email": "bill@mail.com",
            "username": "billbain",
            "password": bcrypt.hashSync("bain",12),
            "active": false
        },
        {
            "id": 3,
            "first": "Jody",
            "last": "Isaguirre",
            "email": "jody@mail.com",
            "username": "jodyisaquirre",
            "password": bcrypt.hashSync("irre",12),
            "active": false
        },
        {
            "id": 4,
            "first": "Jonathan",
            "last": "Hovland",
            "email": "jonathan@mail.com",
            "username": "jonathanhovland",
            "password": bcrypt.hashSync("land",12),
            "active": false
        },
        {
            "id": 5,
            "first": "Rob",
            "last": "Hill",
            "email": "robhill@mail.com",
            "username": "robhill",
            "password": bcrypt.hashSync("hill",12),
            "active": false
        }
    ]);
  });
};

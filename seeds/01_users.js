exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex
    .raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 7;')
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          first: "Evan",
          last: "Apodaca",
          email: "evapodaca87@gmail.com",
          username: "evapodaca87",
          password: "evan",
          active: false
        },
        {
          id: 2,
          first: "Bill",
          last: "Bain",
          email: "bill@mail.com",
          username: "billbain",
          password: "b4in",
          active: false
        },
        {
          id: 3,
          first: "Jody",
          last: "Isaguirre",
          email: "jody@mail.com",
          username: "N0L1m1t",
          password: "irre",
          active: false
        },
        {
          id: 4,
          first: "Jonathan",
          last: "Hovland",
          email: "jonathan@mail.com",
          username: "jonathanhovland",
          password: "land",
          active: false
        },
        {
          id: 5,
          first: "Rob",
          last: "Hill",
          email: "robhill@mail.com",
          username: "robhill",
          password: "hill",
          active: false
        },
        {
          id: 6,
          first: "Anh",
          last: "Nguyen",
          email: "anhabanana@mail.com",
          username: "blackoxy",
          password: "anh",
          active: false
        },
        {
          id: 7,
          first: "Victor",
          last: "Montoya",
          email: "victory@mail.com",
          username: "v_monty",
          password: "vicci",
          active: false
        },
        {
          id: 8,
          first: "Matt",
          last: "Winzer",
          email: "matty@mail.com",
          username: "ftwinzer",
          password: "winwin",
          active: false
        }
      ]);
    });
};

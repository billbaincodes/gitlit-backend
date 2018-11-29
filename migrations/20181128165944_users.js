

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments()
    table.string('first')
    table.string('last')
    table.string('email')
    table.string('username')
    table.string('password')
    table.boolean('active')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};


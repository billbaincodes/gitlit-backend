

exports.up = function(knex, Promise) {
  return knex.schema.createTable('bars', function (table) {
    table.increments()
    table.string('name')
    table.string('location')
    table.integer('star_avg')
    table.integer('user_count')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bars')
};


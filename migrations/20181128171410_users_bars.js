
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_bars', function (table) {
    table.increments()
    table.integer('user_id').references('users.id').unsigned().onDelete('cascade')
    table.integer('bar_id').references('bars.id').unsigned().onDelete('cascade')
    table.integer('stars')
    table.string('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_bars')
};

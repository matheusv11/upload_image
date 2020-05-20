
exports.up = function(knex) {
  return knex.schema.createTable('images', table=>{
      table.increments();

      table.string('name').notNullable();
      table.integer('size').notNullable();
      table.string('key').notNullable();
      table.string('url').notNullable();
      
  })
};

exports.down = function(knex) {
  
};

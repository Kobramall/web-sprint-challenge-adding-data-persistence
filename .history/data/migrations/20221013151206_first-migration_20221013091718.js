/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up =  async function(knex) {
  await knex.schema
  .createTable('projects')
  .createTable('resources')
  .createTable('tasks')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
     .dropTableIfExists()
     .dropTableIfExists()
     .dropTableIfExists()
};

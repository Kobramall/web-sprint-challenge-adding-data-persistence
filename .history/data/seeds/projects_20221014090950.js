/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'Do Test', project_description: 'just for test',project_completed: false },
    {project_name: 'test Test', project_description: 'same here',project_completed: false},
    {project_name: 'mega test', project_description: 'Mega same here',project_completed: false}
  ]);
};

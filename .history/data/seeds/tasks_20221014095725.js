/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_description: 'get it done', task_notes: 'Nice',task_completed: false, project_id: 1},
    {task_description: 'time to fight', task_notes: 'great',task_completed: false, project_id: 2},
    {task_description: 'I am ironman', task_notes: 'perfect',task_completed: false, project_id: 3}
  ]);
};

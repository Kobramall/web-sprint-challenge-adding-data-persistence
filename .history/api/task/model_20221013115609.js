// build your `Task` model here
const db = require('../../data/dbConfig')


async function find() {
    return db('tasks as t')
    .leftJoin('projects as p', 't.projects_id', 'p.projects_')
    .select('p.project_name', 'project_description')
}



module.exports = {
    find
}
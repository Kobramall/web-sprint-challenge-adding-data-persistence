// build your `Task` model here
const db = require('../../data/dbConfig')


function find() {
    return db('tasks as t')
    .join('projects as p', 't.projects_id', 'p.projects_id')
    .select('p.project_name', 'project_description')
}



module.exports = {
    find
}
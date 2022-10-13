// build your `Task` model here
const db = require('../../data/dbConfig')


function find() {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_name', 'project_description')
}



module.exports = {
    find
}
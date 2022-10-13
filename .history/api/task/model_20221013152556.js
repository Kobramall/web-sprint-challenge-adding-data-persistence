// build your `Task` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('tasks').where('task_id', id).first()
} 

function find() {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_name', 'project_description')
}

function add(task){
    return db('tasks').insert(task)
    .then(([id]) => {
        return db('task').where('task_id', id)
    })
}



module.exports = {
    find, add, getById
}
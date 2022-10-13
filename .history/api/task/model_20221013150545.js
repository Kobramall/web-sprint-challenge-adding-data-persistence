// build your `Task` model here
const db = require('../../data/dbConfig')


function find() {
    return db('tasks as t')
    .select('task_completed', 'task_description', "task_notes")
}

function add(task){
    return db('tasks').insert(task)
    .then(([id]) => {
        return db('task').where('task_id', id)
    })
}



module.exports = {
    find, add
}
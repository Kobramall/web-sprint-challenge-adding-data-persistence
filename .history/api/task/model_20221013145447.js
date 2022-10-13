// build your `Task` model here
const db = require('../../data/dbConfig')


function find() {
    return db('tasks as t')

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
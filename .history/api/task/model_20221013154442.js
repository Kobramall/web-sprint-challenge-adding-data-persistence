// build your `Task` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('tasks').where('task_id', id).first()
} 

function find() {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('p.project_name', 'project_description')
    .then(()=>{
        return db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', "task_description", "task_notes","task_completed" )
    })
}

async function add(task){
    const [id] = await db('tasks').insert(task)
    return getById(id)
    
}



module.exports = {
    find, add, getById
}
// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

async function find () {
    return db('projects').select('project_completed', 'project_name', 'project_description')
    //console.log(row)
     //row.project_completed === 0 ? {...row, project_completed: false} : {...row, project_completed: true}

    

 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
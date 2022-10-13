// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

function find () {
    const row = db('projects')

  return {...row, project_completed: false} 
   
 }

 const create = async (project) => {
    const [id] = await db('projects').insert({...project, project_completed: false})
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
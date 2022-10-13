// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

function find () {
   const result = db('projects')
   if(result.project_completed === 0){
       result.project_completed = false
   } else{
    result.project_completed = true
   }
   return result
 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
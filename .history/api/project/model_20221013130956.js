// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

function find () {
   let response = db('project_completed')

   if(response === 0){
      db('project_completed').push(false)
   } else {
    db('project_completed').push(true)
   }
   
    return db('projects')
   
  
 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
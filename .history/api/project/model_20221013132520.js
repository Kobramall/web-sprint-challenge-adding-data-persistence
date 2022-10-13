// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

function find () {
   const response = db('projects').select('project_completed')

   if(response === 0){
    console.log("it works")
   } else{
    console.log('It didnt work')
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
// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

async function find () {
    const rows = db('projects')

    if(rows){
        console.log(rows)
    } else{
        console.log(rows)
    }
  
    

 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
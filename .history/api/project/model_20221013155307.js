// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

async function find () {
    return db('projects')

    

 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
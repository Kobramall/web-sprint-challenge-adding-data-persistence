// build your `Resource` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('resources').where('resource_id', id).first()
} 

function find () {
   return db('resources')
 }

 const create = async (resource) => {
    const [id] = await db('resources').insert(resource)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
// build your `Resource` model here
const db = require('../../data/dbConfig')

 function find () {
   return db('resources')
 }

 const create = async (resource) => {
    return db('resources').insert(resource)
 }


 











module.exports = {
    find, create
}
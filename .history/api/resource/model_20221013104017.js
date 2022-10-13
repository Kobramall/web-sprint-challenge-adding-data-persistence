// build your `Resource` model here
const db = require('../../data/dbConfig')

 function find () {
   return db('resources as r')
   .select("resource_id," , "resource_name", 'resource_description')
}
 











module.exports = {
    find
}
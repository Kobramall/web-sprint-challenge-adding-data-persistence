// build your `Project` model here
const db = require('../../data/dbConfig')

const getById = id =>{
    return db('projects').where('project_id', id).first()
} 

async function find () {
    [db('projects')].forEach(element => {
        if(element.project_completed === 0){
            console.log('it worked')
        }else{
            console.log('it didnt work')
        }
    });
  
    

 }

 const create = async (project) => {
    const [id] = await db('projects').insert(project)
    return getById(id)
 }


 











module.exports = {
    find, create, getById
}
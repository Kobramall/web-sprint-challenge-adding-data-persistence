// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')


const router = express.Router()

router.get('/', (req, res, next) =>{
  Projects.find()
   .then(projects =>{ 
    projects.forEach(element => {
        if(element.project_completed === 0){
            projects.push({...element, project_completed: false})
        }else{
            projects.push({...element, project_completed: true})
        }
        console.log(projects)
    });
   })
   .catch(next)
})

router.get('/:id', async (req, res) =>{
    res.json(req.project)
})

router.post('/', async (req, res, next) =>{
    try{
        const newProject = await Projects.create(req.body)
        res.status(201).json(newProject)
    }catch(err){
        next(err)
    }
})


module.exports = router
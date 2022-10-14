// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')


const router = express.Router()

router.get('/', (req, res, next) =>{
  Projects.find()
   .then(projects =>{ 
     const newProject = []
    projects.forEach(element => {
        if(element.project_completed === 0){
            newProject.push({...element, project_completed: false})
        }else{
            newProject.push({...element, project_completed: true})
        }
        res.json(projects)
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
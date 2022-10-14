// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')


const router = express.Router()

router.get('/', (req, res, next) =>{
  Projects.find()
   .then(projects =>{ 
     const newProjects = []
    projects.forEach(element => {
        if(element.project_completed === 0){
            newProjects.push({...element, project_completed: false})
        }else{
            newProjects.push({...element, project_completed: true})
        }
        
    });
    res.json(newProjects)
   })
   .catch(next)
})

router.get('/:id', async (req, res) =>{
    res.json(req.project)
})

router.post('/', async (req, res, next) =>{
    try{
        const newProject = await Projects.create(req.body)
          let finalProject = {}
        if(newProject.project_completed === 0){
            finalProject = {...newProject, project_completed: false}
        }else{  finalProject = {...newProject, project_completed: true}}
        res.status(201).json(finalProject)
    }catch(err){
        next(err)
    }
})


module.exports = router
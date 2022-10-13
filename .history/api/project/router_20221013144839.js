// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')


const router = express.Router()

router.get('/', async (req, res, next) =>{
   try{
    let project = await Projects.find()
    project.forEach(element => {
      project = [{...element, project_completed: false}]
        res.json(project)
    });
   } catch(err){
    next(err)
   }
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
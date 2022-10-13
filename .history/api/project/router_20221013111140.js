// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')


const router = express.Router()

router.get('/', async (req, res, next) =>{
   try{
    const project = await Projects.find()
    console.log(project.project_completed)
    if(project.project_completed === 0){
        project.project_completed = false
        console.log(project.project_completed)
    } else{
        project.project_completed = true
    }
    res.json(project)
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
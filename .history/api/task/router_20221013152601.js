// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req, res, next) =>{
    Task.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(next)
})

router.get('/:id', async (req, res) =>{
    res.json(req.task)
})

router.post('/', (req, res, next) =>{
    const task = req.body

    Task.add(task)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(next)
})



module.exports = router
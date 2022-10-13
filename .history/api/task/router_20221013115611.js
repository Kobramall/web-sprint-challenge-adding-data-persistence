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




module.exports = router
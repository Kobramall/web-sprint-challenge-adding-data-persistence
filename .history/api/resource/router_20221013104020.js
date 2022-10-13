// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

router.get('/', (req, res, next) =>{
    Resource.find() 
    .then(resources =>{
        res.json(resources)
    })
    .catch(next)
})


module.exports = router
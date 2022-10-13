// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

router.get('/', async (req, res, next) =>{
   try{
    const resources = await Resource.find()
    res.json(resources)
   } catch(err){
    next(err)
   }
})

router.get('/:id', async (req, res, next) =>{
    res.json(req.resource)
})

router.post('/', async (req, res, next) =>{
    try{
        const newResource = await Resource.create(req.body)
        res.status(201).json(newResource)
    }catch(err){
        next(err)
    }
})


module.exports = router
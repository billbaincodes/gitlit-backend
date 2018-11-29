const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('bars')
  .then(bars => {
    res.json({bars: bars})
  })
})

router.get('/:id', (req,res,next) =>{
const id = req.params.id
  knex('bars')
  .where('id',id)
  .then((bar) =>{
    if(!bar.length){
      next()
    }
    else{
    res.json({bar: bar[0]})
    }
  })
})

router.post('/', (req,res,next) =>{
  // const body = req.body
  knex('bars')
    .insert(req.body)
    .returning('*')
    .then((bar) =>{
      console.log(bar)
      res.json({ bar : bar})
    })
})

router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body

  knex('bars')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedBar =>{
      res.json({updatedBar: updatedBar[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('bars')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedBar => {
    res.json({deleteBar:deletedBar[0]})
  })
})





module.exports = router
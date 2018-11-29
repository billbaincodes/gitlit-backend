const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('users_bars')
  .then(users => {
    res.json({users: users})
  })
})

router.get('/:id', (req,res,next) =>{
const id = req.params.id
  knex('users_bars')
  .where('id',id)
  .then((user) =>{
    if(!user.length){
      next()
    }
    else{
    res.json({user: user[0]})
    }
  })
})

router.post('/', (req,res,next) =>{
  // const body = req.body
  knex('users_bars')
    .insert(req.body)
    .returning('*')
    .then((user) =>{
      console.log(user)
      res.json({user: user})
    })
})

router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body

  knex('users_bars')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedUser =>{
      res.json({updatedUser: updatedUser[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('users_bars')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedUser => {
    res.json({deleteUser:deletedUser[0]})
  })
})





module.exports = router
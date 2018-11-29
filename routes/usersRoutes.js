const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('users')
  .then(users => {
    res.json({users: users})
  })
})

router.get('/:id', (req,res,next) =>{
const id = req.params.id
  knex('users')
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
  knex('users')
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

  knex('users')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedUser =>{
      res.json({updatedUser: updatedUser[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('users')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedUser => {
    res.json({deleteUser:deletedUser[0]})
  })
})


//signup
router.post('signup', function(req,res,next){
  var hash = bcrypt.hashSync(req.Params.Password, 8)
  Users().insert({
    email: req.params.email,
    password: hash
  }, 'id').then(function(result){
    res.redirect('/signin')
  })
})




module.exports = router

var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const knex = require('../db/connection');


//signup
router.post('/signup', function(req,res,next){
  const email = req.body.email
  const body = req.body
  const password = req.body.password
  const username = req.body.username

  knex('users')
    .where('email', email)
    .then(user =>{
      if(!user.length){
        const saltRounds = 12
        const hashedPassword = bcrypt.hashSync(password, saltRounds)
        req.body.password = hashedPassword
        knex('users')
          .insert(req.body)
          .returning('*')
          .then(newUser =>{
            const payload = JSON.parse(JSON.stringify(newUser[0]))
            delete payload.password
            const token = jwt.sign(payload, process.env.TOKEN_SECRET)
            console.log(token)
            res.json({token:token})
          })
      }
      else{
        res.json({error: 'Email already registered.'})
      }
      console.log(user)
    })

});

//login
router.post('/login', function(req,res,next){

  const email = req.body.email
  const password = req.body.password

  knex('users')
    .where('email', email)
      .then(user =>{
        if(!user.length){
          res.json(({error: "Email not found in database"}))
        }
        else{
          const hashedPassword = user[0].password
          const match = bcrypt.compareSync(password, hashedPassword)
          if(match){
            const payload = JSON.parse(JSON.stringify(user[0]))
            delete payload.password
            const token = jwt.sign(payload, process.env.TOKEN_SECRET)
            res.json({token:token})
          }
          else{
            res.json({error: "Incorrect Password"})
          }
        }
      })

});



module.exports = router;

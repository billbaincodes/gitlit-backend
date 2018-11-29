const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const bodyParser = require('body-parser')



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const usersRoute = require('./routes/usersRoutes.js')
const barsRoute = require('./routes/barsRoutes.js')
const user_barsRoute = require('./routes/users_barsRoute')

app.use('/users', usersRoute)
app.use('/bars', barsRoute)
app.use('/reviews', user_barsRoute)


app.get('/', (req, res) => {
  res.json('🍄')
})


app.use(notFound)
app.use(errorHandler)



function notFound(err, req, res, next) {
res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}


function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({
      error: err.message,
      stack,
    url: req.originalUrl 
  })
}


app.listen(port, () => {console.log(`Up on port ${port}`)})
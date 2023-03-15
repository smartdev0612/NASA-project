const express = require('express')
const cors = require('cors')

const planetsRounter = require('./routes/planets/planets.router')

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(planetsRounter)

module.exports = app

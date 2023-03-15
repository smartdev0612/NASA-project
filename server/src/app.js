const express = require('express')

const planetsRounter = require('./routes/planets/planets.router')

const app = express()

app.use(express.json())
app.use(planetsRounter)

module.exports = app

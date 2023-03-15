const express = require('express')

const { getAllPlanets } = require('./planets.controller')

const planetsRounter = express.Router()

planetsRounter.get('/planets', getAllPlanets)

module.exports = planetsRounter

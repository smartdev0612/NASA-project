const http = require('http')

const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

const PORT = process.env.PORT || 8000

const MONGO_URL = `mongodb+srv://daniel:OmruuYsrb3Zu50ko@nasacluster.4jetn0y.mongodb.net/nasa?retryWrites=true&w=majority`

const server = http.createServer(app)

async function startServer() {
  await loadPlanetsData()

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

startServer()

const express = require('express')
const cors = require('cors')
const cityData = require('./data/cities');
const app = express()
const port = 5872

app.use(cors())

app.get('/cities', (req, res) => {
  res.send(cityData)
})

app.listen(port, () => {
  console.log(`Servers listening on port ${port}`)
})

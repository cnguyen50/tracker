require('dotenv').config()
require('./models/User')

const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const monogoUri = process.env.DB_KEY;

mongoose.connect(monogoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log("Connected to mongo")
})

mongoose.connection.on('error', (err) => {
  console.error("Connected to mongo", err)
})

app.get('/', (req, res) => {
  res.send(`${monogoUri}`)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
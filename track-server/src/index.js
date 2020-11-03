require('dotenv').config()
const express = require('express')

const app = express()

const monogoUri = process.env.DB_KEY;

app.get('/', (req, res) => {
  res.send(`${monogoUri}`)
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})
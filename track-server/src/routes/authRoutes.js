const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup', (req, res) => {
  console.log(req.body)
  res.send("You've made a post request")
})


module.exports = router
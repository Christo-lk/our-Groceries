const express = require('express')

const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })

 
})

module.exports = router

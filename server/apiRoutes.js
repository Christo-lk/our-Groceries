const express = require('express')

const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
})

// GET USER ITEMS
router.get('/getUserItems/:id', (req, res) => {
  const id = req.params.id

  db.getUserItems(id)
    .then(apiRes => res.json(apiRes))
})

module.exports = router

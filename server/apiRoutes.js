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
router.get('/getUserItems', (req, res) => {
  db.getUserItems(id)
    .then(apiRes => res.json(apiRes))
})

// GET ALL ITEMS
router.get('/getAllItems/:id', (req, res) => {
  const id = req.params.id

  db.getAllItems(id)
    .then(apiRes => res.json(apiRes))
})

module.exports = router

const path = require('path')
const express = require('express')

const apiRoutes = require('./apiRoutes')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/', apiRoutes)

module.exports = server

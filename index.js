const express = require('express')
const path = require('path')
require('dotenv').config() 

const app = express() 


//Node server...
const server = require('http').createServer(app)
module.exports.io = require('socket.io')(server) 
require('./socket/sockets')

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath)) 

const port = process.env.PORT
server.listen(port, () => console.log(`Example app listening on port ${port}!`))
 
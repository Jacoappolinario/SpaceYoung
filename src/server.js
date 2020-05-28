const express = require('express')
const routes = require('./routes')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")
nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function() {
    console.log("Server is running!")
})
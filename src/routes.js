const express = require("express")
const routes = express.Router()
const blog = require('./app/controllers/blog')

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', blog.home)
routes.get('/posts', blog.posts)
routes.get('/posts/:id', blog.details)
routes.get('/about', blog.about)

routes.get('/study', blog.study)
routes.post('/study', blog.post)

module.exports = routes
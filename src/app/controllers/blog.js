const data = require('../../data')
const Blog = require('../models/Blog')

module.exports = {
    home(req, res) {
        return res.render("blog/home")
    },
    posts(req, res) {
        return res.render("blog/posts", { posts: data})
    },
    details(req, res) {
        const { id } = req.params
        const foundPost = data.find(function(post) {
            return post.id == id
        })

        if (!foundPost) return res.send("Post not found")

        return res.render("blog/details", { post: foundPost })
    },
    about(req, res) {
        return res.render("blog/about")
    },
    study(req, res) {
        return res.render("blog/study")
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields")
            }
        }

        Blog.create(req.body, function(study) {
            return res.render("blog/sent")
        })

    }
}
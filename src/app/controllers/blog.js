module.exports = {
    home(req, res) {
        return res.render("blog/home")
    },
    posts(req, res) {
        return res.render("blog/posts")
    },
    about(req, res) {
        return res.render("blog/about")
    }
}
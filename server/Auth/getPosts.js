const express = require("express");
const getPosts = express.Router();
const {Post} = require("./createPost")


getPosts.get("/",  async (req, res) => {
const posts = await Post.find({})
res.send(posts)
})

module.exports = getPosts


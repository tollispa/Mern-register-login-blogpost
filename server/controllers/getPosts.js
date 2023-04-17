const express = require("express");
const getPosts = express.Router();
const Post = require("../schemas/post")


getPosts.get("/",  async (req, res) => {
const posts = await Post.find({})
res.send(posts)
})

module.exports = getPosts


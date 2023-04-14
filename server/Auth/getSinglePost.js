const express = require("express");
const getSinglePost = express.Router();
const {Post} = require("./createPost")


getSinglePost.get("/:id",  async (req, res) => {
    const id = req.params.id
    console.log(id)
const posts = await Post.find({userId: `${id}`})
console.log(posts)
res.send(posts)
})

module.exports = getSinglePost

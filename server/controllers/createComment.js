const express = require("express");
const createComment = express.Router();
const user = require("../schemas/User")
const Post = require("../schemas/post")


createComment.post("/", async (req, res) => {
    const userID = req.session.userId
    const postID = req.body.id 
    const comment = req.body.comment 
    const username = await user.find({_id: `${userID}`}).lean().select('username').exec()
    console.log(username[0].username)
    try {
       
        const post = await Post.updateOne({_id: `${postID}`}, {$push: {comments: {comment: `${comment}`, username: `${username[0].username}`}}})
        res.send(post)
    }
    catch(err){
        console.log(err)
    }


})

module.exports = createComment
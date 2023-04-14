const express = require("express");
const likePost = express.Router();
const user = require("./User")
const {Post} = require("./createPost")


likePost.patch("/", async (req, res) => {
    const userID = req.session.userId
    const blogPostID = req.body.id 
    if(!userID) {
        return res.sendStatus(401)
    }
    const findName = await user.find({_id: `${userID}`}).lean().select('username').exec()
  
    
    const checkIfUserLiked = await Post.findOne({ _id: blogPostID, likes: findName[0].username }).lean().select('likes').exec();
    
    console.log(checkIfUserLiked)
    if (checkIfUserLiked)  {
        return console.log("User has already liked!")
    }

    const updateLike = Post.updateOne(
        {_id:`${blogPostID}`},
        {$push: {likes: `${findName[0].username}`}}
        )

    try {
        const result = await updateLike
        res.send("ok")
        console.log("like updated!")
    }catch(err) {
        console.log(err)
    }
})

module.exports = likePost
const express = require("express");
const editPost = express.Router();
const Post = require("../schemas/post")

editPost.patch("/", async (req, res) => {
 const userID = req.session.userId
 const postID = req.body.id 
 const newText = req.body.text
 const checkIfUserIsAuthToEdit = await Post.findOne({_id: `${postID}`, userId: `${userID}`})
 
 if(!checkIfUserIsAuthToEdit){
    return res.sendStatus(401)
 }
try {
    const uptade = await Post.findByIdAndUpdate(postID, {post: `${newText}`})
   res.sendStatus(200)

}catch(err){
    console.log(err)
}
})

module.exports = editPost
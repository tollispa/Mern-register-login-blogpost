const express = require("express");
const selectAvatar = express.Router();
const user = require("../schemas/User")

selectAvatar.patch("/", async (req, res) => {
    const userId = req.session.userId
    const avatarUrl = req.body.url 
    try {
        const setAvatar = await user.findByIdAndUpdate(userId, {avatar: `${avatarUrl}`})
        res.send({message: "Avatar selected!"})
    }catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = selectAvatar
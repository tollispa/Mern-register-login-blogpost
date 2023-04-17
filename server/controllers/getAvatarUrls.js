
const mongoose = require("mongoose")
const express = require("express");
const getAvatarUrls = express.Router();

getAvatarUrls.get("/", async (req, res) => {
    try {
      const avatars = await mongoose.connection.db.collection('avatars').find({}).toArray()
      res.send(avatars)
    } catch (err) {
      console.error(err)
      res.status(500).send('Internal Server Error')
    }
  })
module.exports = getAvatarUrls
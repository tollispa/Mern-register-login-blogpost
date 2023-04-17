const express = require("express");
const getUsers = express.Router();
const user = require("../schemas/User");

getUsers.get("/", async (req, res) => {
    const findUsers = await user.find({})
    res.send(findUsers)
})

module.exports = getUsers
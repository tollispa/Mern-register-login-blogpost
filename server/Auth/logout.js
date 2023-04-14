const express = require("express");
const logout = express.Router();

logout.get("/", (req, res) => {
    res.clearCookie("userId")
    res.send("logged out")
})

module.exports = logout;
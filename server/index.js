const express = require("express")


const cors = require("cors")
const register = require("./Auth/register")
const session = require("express-session")
const login = require("./Auth/login")

const logout = require("./Auth/logout")
const {createPost} = require("./controllers/createPost")
const getPosts = require("./controllers/getPosts")
const likePost = require("./controllers/likePost")
const deletePost = require("./controllers/deletePost")
const editPost = require("./controllers/editPost")
const getSinglePost = require("./controllers/getSinglePost")
const getUsers = require("./controllers/getUsers")
const database = require("./database/db")
const createComment = require("./controllers/createComment")


const app = express()

database()


app.use(express.json())


app.use(session({
    key: "userId",
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    
    cookie: {
        domain: "localhost",
        path: "/",
        maxAge: 1000 * 60 * 24,
        httpOnly: true
      
    },
}));


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true
}));






  


app.use("/register", register)
app.use("/login", login)
app.use("/logout", logout)
app.use("/createpost", createPost)
app.use("/getposts", getPosts)
app.use("/likepost", likePost)
app.use("/deletepost", deletePost)
app.use("/editpost", editPost)
app.use("/getsinglepost", getSinglePost)
app.use("/users", getUsers)
app.use("/commentpost", createComment)



app.get("/isLoggedIn", (req, res) => {
    if (!req.session.userId) {
        res.sendStatus(404)
    }else {
        res.send(req.session.username)
    }
})
app.listen(4000, () => {
    console.log("Server started on port 4000")
})
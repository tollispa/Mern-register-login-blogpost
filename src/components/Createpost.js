import {TextField, Button} from "@mui/material"
import {useState} from "react"
import axios from "axios"



const Createpost = (props) => {
    const [title, setTitle] = useState("")
    const [post, setPost] = useState("")
    console.log("Ny", props.posts)
   
const addPost = () => {
    axios.post("http://localhost:4000/createpost", {
       
        post: post
    }).then((res) => {
        setTitle("")
        setPost("")
       console.log(res)
       return axios.get("http://localhost:4000/getposts")
       .then((res) => {
        props.setPosts(res.data)
       })
        
          
         
    }).catch((err) => {
        console.log(err)
        if(err.response.status === 401) {
            return alert("Login to create post")
        }
        alert(err.response.data[0].message)
    })
}
    return (
        <div className="w-full flex flex-col items-center">
          
  
  <TextField 
    onChange={e => setPost(e.target.value)}
    value={post}
   

  className="w-[200px] mt-2"
  variant="outlined" label="Post"/>
  <Button
  onClick={addPost}
  style={{backgroundColor: "#1877f2"}}
  className=" text-white w-[200px] mt-2"
  >Create Post</Button>
        </div>
    )
}

export default Createpost
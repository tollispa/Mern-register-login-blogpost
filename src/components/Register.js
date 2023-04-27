import {useState, useEffect} from "react"
import axios from "axios"
import {TextField, Button} from "@mui/material"
import {Link} from "react-router-dom"

export const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
    
      setErrMsg("")
      
    },[username, password, repeatPassword])

    const registerUser = () => {
      if (password !== repeatPassword){
        return setErrMsg("Passwords doesn't match! Try again!")
      }
        
        axios.post("http://localhost:4000/register", {
          username: username,
          password: password
        }).then((res) => {
        
          setUsername("")
          setPassword("")
          setRepeatPassword("")
          alert(res.data.message)
          console.log(res)
        }).catch((err) => {
          if(username === "" || password === "" ) {
            return setErrMsg("Required fields cant be empty!*")
          }
         
          setErrMsg("Username " +err.response.data.message + "!")
         
        })
    }
    
    return (
  
    
<div className="flex flex-col relative w-full h-full items-center">
<p className="absolute bottom-0 shadow-lg m-2 p-2 rounded sm:hidden bg-black text-white w-full">Copyright © 2022 Tollis Papadopoulos. All rights reserved.</p>
<div className="absolute h-screen w-[20%] right-20 top-0 hidden sm:block">
        <img className=""src="https://ultimateqa.com/wp-content/uploads/2020/07/banner_img_2-1.png" alt="/"/>
</div>
<div className="absolute h-screen w-[20%] left-20 top-0 hidden sm:block">
        <img src="https://media.istockphoto.com/vectors/young-people-students-characters-with-dialog-speech-bubbles-chatting-vector-id1128025473?k=6&m=1128025473&s=170667a&w=0&h=TPfb0cqkR64Z68_RMFAJbUerb10NrEltPy04cwlx5j8=" alt="/"/>
</div>
    <h1>Register</h1>

  <TextField 
  onChange={e => setUsername(e.target.value)}
  value={username}
  className="w-[200px] mt-2"
  variant="outlined" label="Username"/>
  <TextField 
    onChange={e => setPassword(e.target.value)}
    type="password"
    value={password}
  className="w-[200px] mt-2"
  variant="outlined" label="Password"/>
    <TextField 
    onChange={e => setRepeatPassword(e.target.value)}
    value={repeatPassword}
    type="password"
  className="w-[200px] mt-2"
  variant="outlined" label="Confirm password"/>
  <Button
  onClick={registerUser}
  className="bg-black text-white w-[200px] mt-2"
  >Register</Button>
  <p className="text-red-500">{errMsg}</p>
  <p>Already have an account? Go to <Link to="/login">Login</Link> </p>
  <div className="w-full h-screen block sm:hidden">   
    <img className="" src="https://ultimateqa.com/wp-content/uploads/2020/07/banner_img_2-1.png" alt="/"/>
    <img src="https://media.istockphoto.com/vectors/young-people-students-characters-with-dialog-speech-bubbles-chatting-vector-id1128025473?k=6&m=1128025473&s=170667a&w=0&h=TPfb0cqkR64Z68_RMFAJbUerb10NrEltPy04cwlx5j8=" alt="/"/>
    </div>
    <div className="h-full w-full  text-black">
   

    </div>
    
</div>
    )
}
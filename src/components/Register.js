import {useState, useEffect} from "react"
import axios from "axios"
import {TextField, Button} from "@mui/material"
import {Link} from "react-router-dom"

export const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
    
      setErrMsg("")
      
    },[username, password])

    const registerUser = () => {
        
        axios.post("http://localhost:4000/register", {
          username: username,
          password: password
        }).then((res) => {
        
          setUsername("")
          setPassword("")
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
  
    
<div className="flex flex-col w-full h-screen items-center">
    <h1>Register</h1>

  <TextField 
  onChange={e => setUsername(e.target.value)}
  value={username}
  className="w-[200px] mt-2"
  variant="outlined" label="Username"/>
  <TextField 
    onChange={e => setPassword(e.target.value)}
    value={password}
  className="w-[200px] mt-2"
  variant="outlined" label="Password"/>
  <Button
  onClick={registerUser}
  className="bg-black text-white w-[200px] mt-2"
  >Register</Button>
  <p className="text-red-500">{errMsg}</p>
  <p>Already have an account? Go to <Link to="/login">Login</Link> </p>

</div>
    )
}
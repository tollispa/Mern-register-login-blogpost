import axios from "axios"
import {useEffect, useState} from "react"
import {TextField, Button} from "@mui/material"
import {Link} from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [header, setHeader] = useState("Login")
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
    
        setErrMsg("")
        
      },[username, password])
  
    const login = () => {
       
        axios.post("http://localhost:4000/login", {
            
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
           
            setPassword("")
            setUsername("")
            
            
        }).catch((err)=> {
            if(username === "" || password === "" ){
                return setErrMsg("Please fill the required fields!")
            }
            setErrMsg(err.response.data.message)
        })
    }
    useEffect(() => {
        axios.get("http://localhost:4000/isLoggedIn")
        .then((res) => {
            if(res.status === 200) {
                const name = res.data
                setHeader(`Welcome, ${name}!`)
            }
            console.log(res)
        }).catch((err) => console.log(err))
    }, [password === ""])

    return (
<div className="w-full h-screen ">
    <h1 className="">
        {header}
    </h1>
    
        <div className="flex flex-col items-center">
    <TextField 
    value={username}
    className="max-w-[200px] m-1"
    onChange={e => setUsername(e.target.value)}
    id="outlined-basic" label="Username" variant="outlined" />
    <TextField 
    value={password}
    className="max-w-[200px] m-1"
    onChange={e => setPassword(e.target.value)}
    id="outlined-basic" label="Password" variant="outlined" />
    <Button 
    className="bg-black text-white w-[200px] m-1"
    onClick={login}>Login</Button>
    <p className="text-red-500">{errMsg}</p>
    <p>Don't have an account? Go to <Link to="/register">Register</Link> </p>
    </div>
    

</div>
    )
}

export default Login
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
<div className="w-full h-screen relative ">
    
    <div className="absolute h-screen w-[20%] right-20 top-0 hidden sm:block">
        <img className=""src="https://image.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg" alt="/"/>
</div>
<div className="absolute h-screen w-[20%] left-20 top-0 hidden sm:block">
        <img src="https://th.bing.com/th/id/R.b9722388028d85a624ff4737521a3d21?rik=NkGfsmffoBlPdw&riu=http%3a%2f%2f24yj1c3qu73u1jxvnd3fmwt9-wpengine.netdna-ssl.com%2fwp-content%2fuploads%2f2021%2f05%2fcomputer-signing-tenancy-agreement-kraked.png&ehk=R3myf3NhC7euw8mNVrHCDb7u2DfwhXffHXe1aMHWpKw%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
</div>
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
    <div className="w-full h-screen block sm:hidden">   
    <img className="" src="https://th.bing.com/th/id/R.b9722388028d85a624ff4737521a3d21?rik=NkGfsmffoBlPdw&riu=http%3a%2f%2f24yj1c3qu73u1jxvnd3fmwt9-wpengine.netdna-ssl.com%2fwp-content%2fuploads%2f2021%2f05%2fcomputer-signing-tenancy-agreement-kraked.png&ehk=R3myf3NhC7euw8mNVrHCDb7u2DfwhXffHXe1aMHWpKw%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
    <img src="https://image.freepik.com/vecteurs-libre/illustration-du-concept-connexion_114360-739.jpg" alt="/"/>
    </div>
    

</div>
    )
}

export default Login
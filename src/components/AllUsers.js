import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/users")
        .then((res) => {
            setUsers(res.data)
        })
    },[])
    console.log(users)
 return (
    <div className="hidden border-2 relative border-black rounded p-8 text-left font-bold sm:block">
      
        {users.length === 0 ? <p>Database isn't running yet.</p> : users.map((user) => {
            return <p className="m-2"><Link className=""to={`/feed/${user._id}`}>{user.username.toUpperCase()}</Link></p>
        })}
    </div>
 )
}

export default AllUsers
import {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom"


const SingleFeed = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
            axios.get(`http://localhost:4000/getsinglepost/${id}`)
            .then((res) => {
                setPosts(res.data)
            })
    }, [])

    return (
        <div className='flex flex-col w-full h-screen items-center'>
            <div>
       
            <h1 className='font-bold text-4xl mb-8'>Single Feed Page</h1>
           {posts.length === 0 ? <p>User has no posts!</p> : posts.map((post) => {
            return (
                <p className='min-w-[250px] shadow-lg p-4 m-2 rounded' key={post._id}><span className='font-bold'>{post.username.toUpperCase()}</span><br/>
                {post.post}</p>
            )
           })}
           <p className='font-bold pt-6'>Back to <Link to="/feed">Feed</Link></p>
           </div>
        </div>
    )
}

export default SingleFeed
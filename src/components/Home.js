

import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {useState} from "react"
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"




const Home = () => {
  const [nav, setNav] = useState(true)
  


  const clickNavbar = () => {
    setNav(!nav)
 
    
  }
   
    return (
        <div 
        className="w-full h-screen relative bg-white">
          <h1 className="font-bold text-3xl sm:text-6xl">Welcome!</h1>
          <div className=" w-[300px] h-[300px] inline-block">
          <img className="h-full w-full"
          src="https://static.vecteezy.com/system/resources/previews/000/518/121/original/vector-man-and-woman-with-smartphones-concept-illustration-texting-messaging-chatting-social-media-customer-assistance-dating-communication.jpg" alt="/"/>
          </div>
         

          <div className="absolute right-20 top-20 sm:hidden text-3xl" onClick={clickNavbar}>
          {!nav ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20}/>}
          </div>
          
          <div className={!nav ? "sm:hidden w-[70%] sm:w-[20%] h-screen bg-black border-r-2 border-gray-400 absolute left-0 top-0 left ease-in-out duration-500" : "fixed left-[-200%]"}>
            <h2 className="font-bold text-gray-200 ">About us</h2>
            <p className="font-bold p-2 sm:text-xl text-2xl text-blue-500">This is a fullstack project where you can do following, </p>
            <p className="font-bold p-2 text-blue-500">Register, Login, Create post, Like a post, edit and delete your post</p>
            <Link className=" m-2 bg-blue-500 p-2 rounded text-white no-underline"to="/login">Get started
            
            </Link> <br/>
            <div className="p-3 absolute bottom-10 gap-2 align-center items-center justify-center">
            <FontAwesomeIcon size="3x" className="p-1 text-blue-600"icon={faLinkedin} />
            <FontAwesomeIcon size="3x" className="p-1 text-blue-500" icon={faFacebook} />
            <FontAwesomeIcon size="3x" className="p-1 text-pink-500" icon={faInstagram} />
            </div>
           
          </div>
          <div className="absolute top-0 h-screen w-[25%] hidden sm:block border-r shadow-lg bg-slate-50 border-gray-700 bg">
            <h2 className="font-bold text-gray-1000 p-2 ">About this project</h2>
            <p className="font-bold p-2 sm:text-xl text-2xl text-blue-500">This is a fullstack project where you can do following, </p>
            <p className="font-bold p-2 text-blue-500">Register, Login, Create post, Like a post, comment, edit and delete your post</p>
            <Link className=" m-2 bg-blue-500 p-2 rounded text-white no-underline"to="/login">Try it out? Click here
            
            </Link> <br/>
            <div className="p-3 absolute bottom-40 gap-2 align-center items-center justify-center">
            <FontAwesomeIcon size="3x" className="p-1 text-blue-600"icon={faLinkedin} />
            <FontAwesomeIcon size="3x" className="p-1 text-blue-500" icon={faFacebook} />
            <FontAwesomeIcon size="3x" className="p-1 text-pink-500" icon={faInstagram} />
            </div>
           
          </div>
          <div className="hidden sm:block absolute w-[20%] h-screen  top-10 right-0">
            <img src="https://th.bing.com/th/id/R.04ebabefda9144b0bfcbadf9a5f9e295?rik=JwCOb%2fdYUqW3Tw&riu=http%3a%2f%2fwww.thinkmerchantservices.com%2fwp-content%2fuploads%2f2020%2f04%2fagentbeg.png&ehk=TiE3YKxAgm7p6%2fP0XZEiqT0NJa8QLwkcvVb9vQvMnug%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
          </div>
        </div>

    )
}

export default Home
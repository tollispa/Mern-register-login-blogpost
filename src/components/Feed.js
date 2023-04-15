import {useState, useEffect} from "react"
import axios from "axios"
import Createpost from "./Createpost"
import { Modal, Form } from 'react-bootstrap';
import {TextField, Button} from "@mui/material"
import {Link} from "react-router-dom"
import AllUsers from "./AllUsers";
const Feed = () => {
    const [posts, setPosts] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [editText, setEditText] = useState("")
    const [postID, setPostID] = useState("")
    const [showText, setShowText] = useState("")
    const [header, setHeader] = useState("")
    const [loggedInUser, setLoggedInUser] = useState("")
    const [comment, setComment] = useState("")
    const [activeInputField, setActiveInputField] = useState(null);
   


   
  
    useEffect(() => {
      axios.get("http://localhost:4000/isLoggedIn")
      .then((res) => {
          if(res.status === 200) {
           
              setLoggedInUser(res.data) 
              
              
          }
          console.log(res)
      }).catch((err) => console.log(err))
  }, [])
  
    const handleClose = () => setShowModal(false);
    const handleShow = (ID, Text) => {
     setShowText(Text)
      setPostID(ID)
      
      setShowModal(true);}
    
    useEffect(() => {
        axios.get("http://localhost:4000/getposts")
        .then((res) => {
            setPosts(res.data)
         
        })
    
    },[])
 
    const likeButton = (ID) => {
        axios
          .patch("http://localhost:4000/likepost", {
            id: ID
          })
          .then(() => {
            axios
              .get("http://localhost:4000/getposts")
              .then((res) => {
                setPosts(res.data)
              })
          })
      }
      const deleteButton = (ID) => {  
        axios.delete("http://localhost:4000/deletepost", {
          data: {
            id: ID
          }
        }).then((res) => {
          console.log(res)
          return axios.get("http://localhost:4000/getposts");
         
        }).then((res) => {
          setPosts(res.data)
        })

      }

      const handleEditText = (postID) => {
        axios
          .patch("http://localhost:4000/editpost", {
            id: postID,
            text: editText,
          })
          .then((res) => {
            console.log(res);
            setEditText("")
            setShowModal(false);
            return axios.get("http://localhost:4000/getposts");
          })
          .then((res) => {
            setPosts(res.data);
          })
          .catch((err) => {
            console.error("Error editing post:", err);
          });
      };
      const sendComment = (ID, index, e) => {
        axios.post("http://localhost:4000/commentpost", {
          id: ID,
          comment: comment
        }).then((res) => {
          console.log(res)
        })
      }
      const reverse = [...posts].reverse()

  
    
    return (
        <div className="flex relative flex-col w-full h-screen items-center">
         <div className="absolute right-10 top-5"> <AllUsers/></div>
         <h1>{header}</h1>
          <Createpost posts={posts} setPosts={setPosts}/>
          <div  style={{backgroundImage: "url('https://image.freepik.com/free-vector/cartoon-woman-typing-smartphone-sending-message-liking-posts-social-networks-chatting-with-friends-with-emoji-heart-icons-character_208581-28.jpg')"}} className="hidden sm:block bg-cover bg-center w-[350px] h-[350px] absolute left-10 top-20">

          </div>
       
          
          <div className="m-10 relative">
            
           
            {reverse.map((post, index) => {
              return <p id={index}className="m-2 shadow-lg p-6 rounded min-w-[300px] relative" key={post._id}>
                  <Link to={`/feed/${post.userId}`}className="no-underline text-black font-bold text-l">{post.username.toUpperCase()}</Link>   <br/> {" "}{post.post} 
                    <br/><span className="absolute left-10 font-bold text-blue-600">
                   
                      <button title={post.likes.join(", ")}
                    onClick={() => likeButton(post._id)}>👍</button> {post.likes.length}</span>
                    
                   <span className="absolute right-10">
                    {loggedInUser === post.username ?     <span>
                    <button onClick={() => deleteButton(post._id)}>🗑️</button>
                   <button onClick={() => handleShow(post._id, post.post)}>✏️ </button>
                    </span> : null }
                
                    </span> 
                    
                   <br/>
                  <TextField 
                  
                 
                  
                  onFocus={() => setActiveInputField(index)}
                  onBlur={() => setActiveInputField(null)}
                
                  onChange={e => setComment(e.target.value)}
                  className="m-1"label="Write a comment"/><br/>
                  <button 
                  onClick={() =>  sendComment(post._id, index)}
                  className="text-2xl absolute bottom-0 right-5">➡️</button>
                 
                </p>
            })}
            
            <Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Edit your text</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form.Group controlId="messageForm">
      <Form.Control
        as="textarea"
        placeholder={showText}
        value={editText}
        onChange={(e) => {
          setEditText(e.target.value)
          }}
        
      />
    </Form.Group>
  </Modal.Body>
  <Modal.Footer>
   
    <Button className="bg-black text-white font-bold" onClick={() => handleEditText(postID)}variant="primary">
      Submit
    </Button>
  </Modal.Footer>
</Modal>
            </div>
            </div>
    )
}

export default Feed
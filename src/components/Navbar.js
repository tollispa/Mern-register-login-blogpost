import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from "axios"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"

function MyNav() {
  const [avatarPic, setAvatarPic] = useState("")
  const navigate = useNavigate()
  const logout = () => {
      axios.get("http://localhost:4000/logout")
      .then((res) => {
        console.log(res)
        navigate("/")
      })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/isLoggedIn")
    .then((res) => {
      if(res.data === "") {
       setAvatarPic("https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png")
      }
    }).catch((err) => console.log(err))
}, [])
  return (
    <Navbar className='relative' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="text-white-"href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            
            <Nav.Link href="/feed">Feed</Nav.Link>
           
            
            <NavDropdown title={<img className='w-full h-[25px] inline-block rounded-full object-contain' src={`${avatarPic}`} alt=""/>} id="basic-nav-dropdown">


              
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
              <NavDropdown.Item href="/add-item">
                Add Item
              </NavDropdown.Item>
             
              <NavDropdown.Item >
                
               <button onClick={logout}>Logout</button></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
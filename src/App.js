import axios from "axios"
import './index.css'
import Login from './components/Login';
import  {Register}  from './components/Register';
import AddItem from "./components/AddItems";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyNavbar from "./components/Navbar";
import Home from "./components/Home"
import Createpost from "./components/Createpost";
import Feed from "./components/Feed";
import SingleFeed from "./components/SingleFeed";




function App() {
  axios.defaults.withCredentials = true;
  
  return (
    <div className="App">
      <BrowserRouter>
    <MyNavbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/add-item" element={<AddItem/>}/>
    <Route path="/create-post" element={<Createpost/>}/>
    <Route path="/feed" element={<Feed/>}/>
    <Route path="/feed/:id" element={<SingleFeed/>}/>



    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;

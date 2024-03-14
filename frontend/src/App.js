import React ,{useEffect,useContext} from 'react';
import "./App.css";
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import { Context } from './index.js';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home.jsx';
import Error from './components/NotFound/Error.jsx';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

const App =()=>{
const {isAuthorized,setIsAuthorized,setUser}=useContext(Context);

// useEffect(()=>{
//   const fetchuser =async()=>{
//    try{ const response=await axios.get("http://localhost:4000/user/getuser",{withCredentials:true});
//    console.log(response)
//     setUser(response.data.us);
//     setIsAuthorized(true);
//   }
// catch(error){
//     setIsAuthorized(false);
//   }
  
// }
// fetchuser();
// },[isAuthorized]);

  return (
    <>
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
        <Toaster />
      </Router>
      </>
  )
}

export default App

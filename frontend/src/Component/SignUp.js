import React from "react";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import './toast.css';
import { SignUp } from '../services/UserService'
import { useHistory, useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Signup=()=>{

  
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    
  })


  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await SignUp(signup.name,signup.username, signup.email, signup.password);
    console.log(res);
    if (res.data === "Signup Successful !") {
      toast.success('Signup Successful !', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        history.push('/login');
    }, 1500);
      
    } else if(res.data === "Username Already Exists") {
      toast.error('Username Already Exists !', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } 
    else {
      console.log(res.data);

    }

  }

  const history = useHistory();

  const myStyle1={
    backgroundImage: "url('addbg4.jpg')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',        
  }
  
  
   return(
    <>
    
    <div>
                <div style={myStyle1}>
                <br></br>
                <button className='back'><Link style={{textDecoration: "none"}} to="/"><div className='back2'>Back</div></Link></button>
                <div className="signupbox" style={{marginTop: "10px"}}>                  <br></br>
                  <img src="userlogo.png" height="90px" width="90px"></img><br></br><br></br>
                  <form onSubmit={handleSubmit}>
                   <input className="signupinput" placeholder="Name" type="text" id="name"  autoComplete="off" value={signup.name} onChange={handleChange} ></input><br></br><br></br>
                 <input className="signupinput" placeholder="User Name" type="text" id="username"  autoComplete="off" value={signup.username} onChange={handleChange}></input><br></br><br></br>
                    <input className="signupinput" placeholder="Email" type="text" id="email" value={signup.email} onChange={handleChange} ></input><br></br><br></br>
                    <input className="signupinput" placeholder="Password" type="password" id="password" value={signup.password} onChange={handleChange} ></input><br></br><br></br>
                  
                  
                 
                  <button className="signupbutton" >Sign Up</button><br></br><br></br>
                  </form>

                  <div className='or'><hr  backgroundColor='white' width="180px" size='3.5'></hr>&nbsp; OR &nbsp;<hr backgroundColor='white' width="180px" size='3.5'></hr></div>
                  <div className='already'>Already have an account ?&nbsp;<Link className="forgotpw" to="/login"><div>Login</div></Link></div>
                </div>
                
              
              <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
                </div>
            </div>
                  
    
    </>
   );

 }
 export default Signup;
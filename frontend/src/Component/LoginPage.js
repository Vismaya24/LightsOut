import React, {useState} from 'react';
import './LoginPage.css';
import {Link} from "react-router-dom";
import NavBar from './NavBar';
import Signup from './SignUp';
import New from './New';
import { useHistory, useParams} from 'react-router-dom'
import LoginPage from './LoginPage';
import {SignIn}  from '../services/UserService'
import { ToastContainer, toast } from 'react-toastify';
import {useRef,  useEffect, useContext} from 'react';
import AuthContext from '../context/AuthProvider';
import Cookies from 'js-cookie';
import HomePage from './HomePage';
import 'react-toastify/dist/ReactToastify.css';

const LOGIN_URL="/auth";

const Login = () => {


    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const Usernamex = '';
    const [signin, setSignin] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await SignIn(signin.username, signin.password);
        if (res.data === "Login Successful !") {
            Cookies.set('Usernamex', signin.username);
            Cookies.set('isLoggedIn', 'true');
            toast.success('Login Successful !', {
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
                history.push('/new');
            }, 1500);

        } else if (res.data === "Invalid Password") {
            toast.error('Invalid password!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Invalid Username!', {
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
    };
    
   

    const myStyle={
        backgroundImage:"url('addbg4.jpg')",
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
      }
    

    
    return(
        <>
        {isLoggedIn ?
                <New />
                :
                <div>
            <div><div style={myStyle}><br></br>
                <button className='back'><Link style={{textDecoration: "none"}} to="/"><div className='back2'>Back</div></Link></button>
                
                    <div className='loginbox' style={{marginTop: "65px"}}>
                    
                    <br></br>
                    <img src='lock.png' height="90px" width="90px"></img><br></br><br></br>
                    
                   <form onSubmit={handleSubmit}>
                   <input className="logininput" placeholder="Username" type="text" id="username"  autoComplete="off" value={signin.username} onChange={handleChange} required ></input><br></br><br></br>
                   <input className="logininput" placeholder="Password" type="password" id="password"  autoComplete="off" value={signin.password} onChange={handleChange} required></input><br></br><br></br>
                   <Link className="forgotpw" to="/forgotpassword"><div className='pw'>Forgot Password ?</div></Link><br></br>
                   <button className='loginbutton'>Log In</button>
                   </form>
                   <br></br>
                   <div className='pw'>Does'nt have an account ? <Link to="/signup" className='forgotpw'><div style={{color: "white", marginTop:"-24px", marginLeft:"170px"}}>Sign Up</div></Link></div>
                    </div>
                   
                </div>
                </div> 
                
                
            </div>


            }
        
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
           
            </>
    )
}

export default Login;


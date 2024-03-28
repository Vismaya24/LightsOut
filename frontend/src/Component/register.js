// import React from "react";
// import {useRef, useState, useEffect} from "react";
// import NavBar from "./NavBar";
// import { Link, useNavigate } from "react-router-dom";
// import './Signup.css';
// import './toast.css';
// // import { SignUp } from '../services/UserService'
// // import SignUp from '../services/UserService'
// import { useHistory, useParams} from 'react-router-dom'
// import UserService from '../services/UserService'
// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import axios from "../api/axios";
// import { ToastContainer, toast } from 'react-toastify';
 
//  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
//  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//  const EMAIL_REGEX= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//  const REGISTER_URL = '/register';

//  const Signup=()=>{

  
  


  
//   const userRef=useRef();
//   const errRef=useRef();
 
//   const[name, setName]=useState('');

//   const[username, setUsername]=useState('');
//   const[validUsername, setValidUsername]=useState(false);
//   const[usernameFocus, setUsernameFocus]=useState(false);

//   const[email, setEmail]=useState('');
//   const[validEmail, setValidEmail]=useState(false);
//   const[emailFocus, setEmailFocus]=useState(false);


//   const[password,setPassword]=useState('');
//   const[validPassword, setValidPassword]=useState(false);
//   const[passwordFocus, setPasswordFocus]=useState(false);
  
//   const[matchPassword, setMatchPassword]=useState('');
//   const[validMatch, setValidMatch]=useState(false);
//   const[matchFocus, setMatchFocus]=useState(false);

//   const[errMsg, setErrMsg]=useState('');
//   const[success,setSuccess]=useState(false);

//   const [value, setValue] = React.useState('');
//   const {id}=useParams();
//   const history = useHistory();

//   const myStyle1={
//     backgroundImage: "url('addbg4.jpg')",
//         height:'100vh',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',        
//   }
    
//   const saveOrUpdateUsers = (e) =>{
//     e.preventDefault();

// const users ={name, username, email, password}

// if(id){
//   UserService.updateUsers(id, users).then((response) =>{
//   history.push('/login')
//   }).catch(error =>{
//     console.log(error);
//   })
// }
// else{
  
//   UserService.createUsers(users).then((response) => {

//     console.log(response.data)
//     history.push('/login');

//     }).catch(error => {
//         console.log(error)
//     })
//     }
// }

// useEffect(() => {
//   UserService.getUserById(id).then((response) =>{
//     setName(response.data.name)
//     setUsername(response.data.user)
//     setEmail(response.data.email)
//     setPassword(response.data.pwd)
//   }).catch(error =>{
//     console.log(error)
//   })
//   }, [])

//   useEffect(() => {
//     userRef.current.focus();
//   }, [])

//   useEffect(() => {
//     setValidUsername(USER_REGEX.test(username));
// }, [username])

//   useEffect(() => {
//     const result=USER_REGEX.test(username);
//     console.log(result);
//     console.log(username);
//     setValidUsername(result);
//   }, [username])

//   useEffect(() => {
//     const result = PWD_REGEX.test(password);
//     console.log(result);
//     console.log(password);
//     setValidPassword(result);
//     const match = password === matchPassword;
//     setValidMatch(match);
//   }, [password, matchPassword])

//   useEffect(()=>{
//     const result=EMAIL_REGEX.test(email);
//     console.log(result);
//     console.log(email);
//     setValidEmail(result);
//   }, [email])


//   useEffect(() => {
//     setErrMsg('');
//   },[username,password,matchPassword])

  
//   const handleSubmit= async (e) =>{
//     e.preventDefault();
//     const v1=USER_REGEX.test(username);
//     const v2=PWD_REGEX.test(password);
//     const v3=EMAIL_REGEX.test(email);

  

//     if(!v1 || !v2 || !v3){
//       setErrMsg("Invalid Entry");
//       return;
//     }
//     try{
//       const response=await axios.post(REGISTER_URL, JSON.stringify({username , password, email}),
//       {
//         headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//       });
//       console.log(response.data);
//       console.log(response.accessToken);
//       console.log(JSON.stringify(response))
//       setSuccess(true);
//     }catch(err){
//         if(!err?.resposne)
//         {
//           setErrMsg('No Server Resonse');
//         }
//         else if(err.response?.status === 409){
//           setErrMsg('Username Take');
//         }
//         else 
//         {
//           setErrMsg('Registration Failed');
//         }
//         errRef.current.focus();
//     }
//   }
//    return(
//     <>
//     {success ? (
//       <section>
//         <h1>Success!</h1>
//         <p><Link to="/"></Link></p>
//       </section>
//     ) : (
//     <div>
//                 <div style={myStyle1}>
//                 <br></br>
//                 <button className='back'><Link style={{textDecoration: "none"}} to="/"><div className='back2'>Back</div></Link></button>
//                 <div className="signupbox" style={{marginTop: "10px"}}>
//                   <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                   <br></br>
//                   <img src="userlogo.png" height="90px" width="90px"></img><br></br><br></br>
//                   <form onSubmit={handleSubmit}>

//                    <label htmlFor="name">
                    
//                    </label>
//                    <input className="signupinput" placeholder="Name" type="text" id="name" ref={userRef} autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} ></input><br></br><br></br>

//                     <label htmlFor="username">
//                     <span className={validUsername ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
//                     <span className={validUsername || !username ? "hide" : "invalid"}>
//                       <FontAwesomeIcon icon={faTimes}/></span></label>
                    
//                     <input className="signupinput" placeholder="User Name" type="text" id="username" ref={userRef} autoComplete="off"  required aria-invalid={validUsername ? "false" : "true"} 
//                     aria-describedby="uidnote" onFocus={()=>setUsernameFocus(true)} onBlur={()=>setUsernameFocus(false)}  value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br><br></br>
//                     <p id="uidnote" className={usernameFocus && username && !validUsername ? "instructions" : "offscreen"}>
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             4 to 24 characters.<br />
//                             Must begin with a letter.<br />
//                             Letters, numbers, underscores, hyphens allowed.
                        
//                         </p>

//                         <label htmlFor="email">
//                         <span className={validEmail ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck} /></span>
//                         <span className={validEmail || !email ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span>
//                         </label>
//                         <input className="signupinput" placeholder="Email" type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-invalid={validEmail ? "false" : "true"} aria-describedby="emailnote" onFocus={() => setEmailFocus(true)} onBlur={()=> setEmailFocus(false)}></input><br></br><br></br>

//                   <label htmlfor="password">
//                      <span className={validPassword ? "valid" : "hide"}><FontAwesomeIcon icon={faCheck}/></span>
//                     <span className={validPassword || !password ? "hide" : "invalid"}><FontAwesomeIcon icon={faTimes}/></span> 
//                   </label>
//                   <input className="signupinput" placeholder="Password" type="password" id="password"  required aria-invalid={validPassword ? "false" : "true"} aria-describedby="pwdnote" onFocus={() => setPasswordFocus(true) } onBlur={() => setPasswordFocus(false)} value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                  
//                   <p id="pwdnote" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
//                     <FontAwesomeIcon icon={faInfoCircle}/>
//                     8 to 24 Characters.Must include uppercase and lowercase letters, a number and a special character.Allowed special characters: 
//                     <span aria-label="exclamation mark">!</span>
//                     <span aria-label="at symbol">@</span>
//                     <span aria-label="hashtag">#</span>
//                     <span aria-label="dollar sign">$</span>
//                     <span aria-label="percent">%</span>
//                   </p>
                   
//                   <label htmlFor="confirm_pwd">
//                     <FontAwesomeIcon icon={faCheck} className={validMatch && matchPassword ? "valid" : "hide"} />
//                     <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPassword ? "hide" : "invalid"}/>
//                   </label>
  
//                   <input className="signupinput" placeholder="Confirm Password"
//                             type="password"
//                             id="confirm_pwd"
//                             onChange={(e) => setMatchPassword(e.target.value)}
//                             value={matchPassword}
//                             required
//                             aria-invalid={validMatch ? "false" : "true"}
//                             aria-describedby="confirmnote"
//                             onFocus={() => setMatchFocus(true)}
//                             onBlur={() => setMatchFocus(false)}
//                         /><br></br><br></br>

//                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}  ><FontAwesomeIcon icon={faInfoCircle} />Must match the first password input field.</p>
//                   <button className="signupbutton" disabled={!validUsername || !validPassword || !validMatch ? true : false} onClick = {(e) => saveOrUpdateUsers(e)}>Sign Up</button><br></br><br></br>
//                   </form>
//                   <div className='or'><hr  backgroundColor='white' width="180px" size='3.5'></hr>&nbsp; OR &nbsp;<hr backgroundColor='white' width="180px" size='3.5'></hr></div>
//                   <div className='already'>Already have an account ?&nbsp;<Link className="forgotpw" to="/login"><div >Login</div></Link></div>
//                 </div>
                
              
//               <ToastContainer
//               position="top-right"
//               autoClose={3000}
//               hideProgressBar={false}
//               newestOnTop={false}
//               closeOnClick
//               rtl={false}
//               pauseOnFocusLoss
//               draggable
//               pauseOnHover
//               theme="light"
//             />
//                 </div>
//             </div>
                  
//     )}
//     </>
//    );





//  }
//  export default Signup;




//  //login
//  import React, {useState} from 'react';
// import './LoginPage.css';
// import {Link} from "react-router-dom";
// import NavBar from './NavBar';
// import Signup from './SignUp';
// import {useRef,  useEffect, useContext} from 'react';
// import AuthContext from '../context/AuthProvider';
// import axios from '../api/axios';
// //import axios from 'axios';

// const LOGIN_URL="/auth";

// const Login = () => {


    
    
//     const {setAuth} = useContext(AuthContext);

//     const userRef=useRef();
//     const errRef=useRef();

//     const [username, setUsername]=useState('');
//     const [password, setPassword]=useState('');
//     const [errMsg , setErrMsg]=useState('');
//     const [success, setSuccess]=useState(false);

//     const myStyle={
//         backgroundImage:"url('addbg4.jpg')",
//             height:'100vh',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//       }
//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [username, password])

//     // const handleSubmit= async (e) => {
//     //     e.preventDefault();
        
//     //     try{
//     //     const response = await axios.post(LOGIN_URL, JSON.stringify({username, password}),
//     //     {
//     //         headers: {'Content-Type' : 'application/json'},
//     //         withCredentials: true
//     //     });
//     //     console.log(JSON.stringify(response?.data));
//     //     //console.log(JSON.stringify(response?.data));
//     //     const accessToken = response?.data?.access_token;
//     //     const roles=response?.data?.roles;
//     //     setAuth({username, password, roles, accessToken});
//     //     setUsername('');
//     //     setPassword('');
//     //     setSuccess(true);
//     //     }catch(err){

//     //         // if(!err?.response){
//     //         //     setErrMsg('No Server Resposne');
//     //         // }
//     //         // else if(err.response?.status === 400)
//     //         // {
//     //         //     setErrMsg('Missing Username or Password');
//     //         // } 
//     //         // else if(err.response?.status === 401)
//     //         // {
//     //         //     setErrMsg('Unauthorized');
//     //         // }
//     //         // else
//     //         // {
//     //         //     setErrMsg('Login Failed');
//     //         // }
//     //         // errRef.current.focus();
//     //     }
        
//     // }
//     return(
//         <>
//         {/* {success ? (
//             <section>
//                 <h1>You are logged in!</h1>
//                 <br></br>
//                 <Link to="/"><button>Go to home</button></Link>
                
//             </section>
//         ) : ( */}
//         <div>
//             <div>
                

//                 <div style={myStyle}><br></br>
//                 <button className='back'><Link style={{textDecoration: "none"}} to="/"><div className='back2'>Back</div></Link></button>
                
//                     <div className='loginbox' style={{marginTop: "65px"}}>
//                     {/* <div className='loginfont1'>Login In</div> */}
//                     <br></br>
//                     <img src='lock.png' height="90px" width="90px"></img><br></br><br></br>
                    
//                    <form>

                    
//                    <input className="logininput" placeholder="Username" type="text" id="username" ref={userRef} autoComplete="off" onChange={(e)=> setUsername(e.target.value)} value={username} required ></input><br></br><br></br>
//                    <input className="logininput" placeholder="Password" type="password" id="password" ref={userRef} autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} required></input><br></br><br></br>
                   
//                    <Link className="forgotpw" to="/forgotpassword"><div className='pw'>Forgot Password ?</div></Link><br></br>
                   
//                    <Link to="/"><button className='loginbutton'>Log In</button></Link>
//                    </form>
//                    <br></br>
//                    <div className='pw'>Does'nt have an account ? <Link to="/signup" className='forgotpw'><div style={{color: "white", marginTop:"-24px", marginLeft:"170px"}}>Sign Up</div></Link></div>
//                     </div>
                   
//                 </div>




               
//                 </div> 
                
                
//             </div>
           
//             </>
//     )
// }

// export default Login;

// // import React, { useState } from 'react';
// // import UserService from '../services/UserService';

// // function LoginPage() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleUsernameChange = (event) => {
// //     setUsername(event.target.value);
// //   };

// //   const handlePasswordChange = (event) => {
// //     setPassword(event.target.value);
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     try {
// //       const response = await fetch('/api/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           username,
// //           password,
// //         }),
// //       });

// //       if (response.ok) {
// //         // Redirect to home page or dashboard
// //         window.location.href = '/';
// //       } else {
// //         const data = await response.json();
// //         setError(data.message);
// //       }
// //     } catch (error) {
// //       setError('Something went wrong. Please try again later.');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Login Page</h1>
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="username">Username</label>
// //           <input
// //             type="text"
// //             id="username"
// //             value={username}
// //             onChange={handleUsernameChange}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginPage;

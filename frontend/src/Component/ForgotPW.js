import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

 const ForgotPassword=()=>{
  const myStyle={
    backgroundImage:"url('addbg4.jpg')",
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
   return(
    <div style={myStyle}>
      
      <div style={myStyle}><br></br>
                <button className='back'><Link style={{textDecoration: "none"}} to="/login"><div className='back2'>Back</div></Link></button>
                
                    <div className='loginbox' style={{marginTop: "65px"}}>
                    {/* <div className='loginfont1'>Login In</div> */}
                    <br></br>
                    <img src='forgot.png' height="90px" width="90px"></img><br></br><br></br>
                    
                   <form>

                   <input className="logininput" placeholder="Email" type="text" id="email"  autoComplete="off" required ></input><br></br><br></br>
                   <input className="logininput" placeholder="New Password" type="password" id="newpassword"  autoComplete="off" required ></input><br></br><br></br>
                   <input className="logininput" placeholder=" Confrim Password" type="password" id="confirmpassword" autoComplete="off" required></input><br></br><br></br>
                   <Link to="/login"><button className='loginbutton'>Reset</button></Link>
                   </form>
                   <br></br>
                   </div>
                   {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>  */}
                   
                </div>
     
                    </div>
                   
   );
 }
 export default ForgotPassword;
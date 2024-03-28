import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css';
import { useState, useEffect } from 'react';
import { useHistory, useParams} from 'react-router-dom'
import Cookies from 'js-cookie';

 const NavBar=()=>{

  
   return(
    <div className="box1">
      <div className="NavBar">
        <nav>
        {/* <div className="title">Lights Out</div> */}
        <img src="logooo.png" height="40px" width="120px"></img>
        {/* <Link style={{textDecoration: 'none'}} to="/"><h4>New</h4></Link> */}
        {/* <div className="logo"><img src="LIGHTS.jpg" height="40px" width="150px"></img></div> */}
        
          <div className="alignment"></div>
          {/* <img src='magni.png' height="20px" width="20px"></img>&nbsp;&nbsp; */}
          &emsp;
            <Link style={{textDecoration: 'none'}} to="/"><div className="nbox1"><h6>Home</h6></div></Link>&nbsp;
            <Link  style={{textDecoration: 'none'}} to="/watch"><div className="nbox2"><h6>Movies&emsp;</h6></div></Link>&nbsp;
            <Link  style={{textDecoration: 'none'}} to="/new"><div className="nbox3"><h6>Add&emsp;</h6></div></Link>&nbsp;
            {/* <Link  style={{textDecoration: 'none'}} to="/watchlist"><div className="nbox4"><h6>WatchList&emsp;</h6></div></Link>&nbsp; */}
            <Link style={{textDecoration: 'none'}} to="/login"><div className="nbox5"><h6>Login</h6></div></Link>&nbsp;
            <Link  style={{textDecoration: 'none'}}to="/signup"><div className="nbox6"><h6>Signup&emsp;</h6></div></Link>&nbsp;
            {/* <input className="input2" type="text" placeholder="SEARCH"></input> */}
            
            
        </nav>
    </div>
    </div>
    
   );
 }
 export default NavBar;
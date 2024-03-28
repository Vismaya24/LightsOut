import React from "react";
const Footer = () => {

    return(
    <div>
        <div className="footerbox"><br></br>
            Connect With Us<br></br>
            <div className="flex">
            <div className="hover">&emsp;
            <a href="https://twitter.com/i/flow/login?lang=en"><img src="twitter.png" width="40px" height="40px"></img></a></div>&emsp;
            <div className="hover"><a href="https://www.facebook.com/login/"><img src="fb.png" width="40px" height="40px"></img></a></div>&emsp;
            <div className="hover"> <a href="https://www.instagram.com/"><img src="instagram.png" width="40px" height="40px"></img></a></div>&emsp;
            <div className="hover"> <a href="https://in.linkedin.com/"><img src="linkedin.png" width="40px" height="40px"></img></a></div>&emsp;
            <div className="hover"><a href="https://www.youtube.com/"><img src="youtube.png" width="40px" height="40px"></img></a></div>&emsp;
            </div><br></br>
            <div style={{color:"ffffff7", fontSize:"15px", marginTop:"10px"}}>Copyright © 2023 . All rights reserved</div>
            
        </div>
    </div>
    )
}
export default Footer;
import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import NavBar from "./NavBar";
import './Homepage.css';
import Footer from "./footer";

 const HomePage=()=>{
  const myStyle={
    // backgroundImage: 'url("avatarr.jpg")',
    // height:"800px",
    // width:"1800px"
    
  }
  const imageUrls = [
    'newavatar.png',
    //'avatarr.jpg',
    'opp.jpeg',
    'cd.jpg',
    'oppen.webp',
    'leo.jpg',
    'master.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };
    return(
      <div className="background2">
        <div>
        <NavBar/>

        <div><br></br><br></br><br></br><div className="header">Discover all the movies, series and lot more
        </div><hr color= "#739ced" className="headthick" width="480px"></hr>
      <div >
        <button className="imgbutton" disabled={currentImageIndex === 0} onClick={handlePrevious}>
         <img src="left-arrow.png" height="40px" width="30px"></img>
        </button>&emsp;&emsp;
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          height='600vh' width='1200vh'
        />&emsp;&emsp;
        <button className="imgbutton" disabled={currentImageIndex === imageUrls.length - 1} onClick={handleNext}>
          <img src="right-arrow.png" height="40px" width="30px"></img>
        </button>
      </div></div></div><br></br><br></br>
        <div className="header">In Theaters</div><hr color= "#739ced" className="headthick" width="120px"></hr>
        <div className="flex">
        <div className="in-theaters"><Link style={{textDecoration: "none"}} to="/viewmovie/20"><img src="evildead.jpg" height="400px" width="290px"></img></Link><div className="homefont">Evil Dead Rise<br></br><a href="https://www.youtube.com/watch?v=BqQNO7BzN08"><button className="home-button">Watch Trailer</button></a></div></div> &emsp;
        <div className="in-theaters"><Link style={{textDecoration: "none"}} to="/viewmovie/3"><img src="the.jpg" height="400px" width="290px"></img></Link><div className="homefont">The Boogeyman<br></br><a href="https://www.youtube.com/watch?v=cFqCmIU0-_M"><button className="home-button">Watch Trailer</button></a></div></div> &emsp;
        <div className="in-theaters"><Link style={{textDecoration: "none"}} to="/viewmovie/21"><img src="2018.jpg" height="400px" width="290px"></img></Link><div className="homefont">2018<br></br><a href="https://www.youtube.com/watch?v=Af3cjNPhM4o"><button className="home-button">Watch Trailer</button></a></div></div> &emsp;
         <div className="in-theaters"><Link style={{textDecoration: "none"}} to="/viewmovie/5"><img src="fastx.jpg" height="400px" width="290px"></img></Link><div className="homefont">Fast X<br></br><a href="https://www.youtube.com/watch?v=eoOaKN4qCKw"><button className="home-button">Watch Trailer</button></a></div></div>&emsp;
         </div><br></br><br></br>
        
        <div className="header">Upcoming</div><hr color= "#739ced" className="headthick" width="110px"></hr>
        <div className="flex">
        <br></br>&emsp;
        <Link style={{textDecoration: "none"}} to="/viewmovie/1"><div className="in-theaters"><img src="leoleo.jpg" height="400px" width="290px"></img><div className="homefont">Leo<br></br>Release Date: 19 Oct 2023</div></div></Link>&emsp;
        <Link style={{textDecoration: "none"}} to="/viewmovie/19"><div className="in-theaters"><img src="bloody.jpeg" height="400px" width="290px"></img><div className="homefont">Bloody Daddy<br></br>Release Date: 9 June 2023</div></div></Link>&emsp;
        <Link style={{textDecoration: "none"}} to="/viewmovie/18"><div className="in-theaters"><img src="oppenheimer.jpg" height="400px" width="290px"></img><div className="homefont">Oppenheimer<br></br>Release Date: 21 July 2023</div></div></Link>&emsp;
        <Link style={{textDecoration: "none"}} to="/viewmovie/5"><div className="in-theaters"><img src="voyage.jpg" height="400px" width="290px"></img><div className="homefont">The Last Voyage of the Demeter<br></br>Release Date: 11 August 2023</div></div></Link>&emsp;
        </div><br></br><br></br>
        
        <Footer />
        
        
    </div>
   );
 }
 export default HomePage;
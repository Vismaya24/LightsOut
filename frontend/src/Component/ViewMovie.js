import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { width } from "@mui/system";
import './viewfilm.css';
import Footer from "./footer";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function ViewUser() {
  const [movie, setMovie] = useState({
    filmname: "",
    year: "",
    filmactor:"",
    filmmaker:"",
    language: "",
    genre: "",
    description:"",
    link: "",
    runtime: "",
    rating: "",
    date:"",
    image: "",
    height: "",
    width: "",
    img1: "",
    img2: "",
    img3: "",
    
  });

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/api/project/films/view/${id}`);
    setMovie(result.data);
  };
  
  return (
    <div>
      <div >
      <div style={{ backgroundImage:`url(${movie.image})`,height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div><br></br>
          <button className="back-back"><Link className="link-hover" to="/watch">Back</Link></button><br></br>
          <div className="leo5">{movie.rating}/5</div>
        <div className="leo3">{movie.date}</div>
        <div className="leo1">{movie.filmname}</div>
        <div className="leo6">{movie.genre}&emsp;&emsp;&emsp;&emsp;{movie.runtime}&emsp;&emsp;&emsp;{movie.language}</div>
        <div style={{marginLeft:"200px"}}><Stack spacing={1}><Rating name="half-rating-read" deafultVlaue={2.5} precision={0.5} value={movie.rating} readOnly /></Stack></div>
        <div className="text-box"><div className="leo4">{movie.description}</div>
        </div>
        <br></br><button className="watch-trailer"><a style={{textDecoration:"none"}} href={movie.link}><div className="watch-text">Watch Trailer</div></a></button>
        <br></br><br></br>
        <div className="flexx">
          <div><div className="leo8">Cast</div>
        <div className="leo9">{movie.filmactor}</div></div>
        <div><div className="leo8">Directed By</div>
        <div className="leo9">{movie.filmmaker}</div></div>
        
        {/* <div className="box-image">
          <div className="flexx"><img src={movie.img1} height="300px"></img> &emsp;&emsp;<img src={movie.img2} height="300px"></img></div>
        </div> */}
       
         </div>
        </div>
        </div>
       
      </div>
     
    </div>
  );
}

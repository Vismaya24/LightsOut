import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import './viewfilm.css';
import Footer from "./footer";

export default function Home2() {
  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/project/films");
    setMovie(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/project/films/${id}`);
    loadUsers();
  };

  return (
    <div className="background">
      <div>
      <NavBar/><br></br><br></br><br></br><br></br>
     <div className="view-text">Movies just for you</div>
     <div className="view-text2">The living room's the stage tonight</div><br></br>
      <div className="film-container">
        {movie.map(
          movie =>
          <div>
            <Link style={{textDecoration:"none"}} to={`/viewmovie/${movie.id}`}> 
            <div className="view-box">
          <img className="view-img" src={movie.img1} height="400px" width="290px"></img><br></br>
          <div className="text1">{movie.filmname}
          <br></br></div>
          <div className="text2">&emsp;Rating: {movie.rating}/5</div>
          <div className="text2">&emsp;Genre: {movie.genre}</div>
          <div className="text2">&emsp;Language: {movie.language}</div>
          </div>
            </Link><br></br><br></br>
          </div>
        )}
      </div>
      
      
      <Footer/>
      </div>
      
    </div>
  );
}

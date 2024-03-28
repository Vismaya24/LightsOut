import React, {useState, useEffect} from 'react'
import MovieService from '../services/MovieService'
import './crud.css';
import { useHistory} from 'react-router-dom'
import NavBar from './NavBar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Cookies from 'js-cookie';
import Footer from './footer';

import {Link} from "react-router-dom";

const New = () => {

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    
  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [isLoggedIn, history]);

const userlogout = () => {
    if (isLoggedIn) {
        history.push('/new');
        Cookies.remove('isLoggedIn');
        setIsLoggedIn(false);
    } else {
        history.push('/login');
    }
};
    const [movies, setMovies] = useState([])
    useEffect(() => {
    getAllMovies();
        
    }, [])
  
  const getAllMovies =() =>{

    MovieService.getAllMovies().then((response) => {
      setMovies(response.data)
      console.log(response.data);
  }).catch(error => {
      console.log(error);
  })
  }
  const deleteMovie =(movieId) =>{
    MovieService.deleteMovie(movieId).then((response) =>{
    getAllMovies();
    }).catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <div style={{backgroundColor: "#0d131f"}}>
      <NavBar /><br></br><br></br><br></br>
      <div> <button className="logout" onClick={userlogout}>Log Out</button>
      <br></br><br></br>
    <Link to ="/addMovies" ><button className="addmovie" style={{marginLeft: "-1400px"}}>Add Movies</button></Link>
     
      
      <div>
        {
          movies.map(
            movies =>
            <div>
        <div className='boxx1'>
          <div key ={movies.id}>
            <div className="v1" style={{marginLeft: "700px"}}>ID: {movies.id}</div>
            <div className="v2">{movies.filmname}</div>
            <div className="v3">{movies.year} . {movies.language}<br></br></div>
            <br></br>
            <div className='v4'>{movies.description}</div><br></br>
            <div style={{display:"inline-flex"}}>
           <div className='sboxx1'><div className="v5">Starring : {movies.filmactor}</div>
            <div className="v5">Directed By : {movies.filmmaker}</div>
            <div className='v5'>Genre : {movies.genre}</div>
            <button className='buttonboxx' style={{marginLeft:"300px", marginTop:"55px"}}><a style={{textDecoration:"none"}} href={movies.link}><div className='t1'>Watch Trailer</div></a></button>
            {/* <div className="tbox" style={{marginLeft:"300px", marginTop:"55px"}}><a style={{textDecoration:"none"}} href={movies.link}><div className='t1'>Watch Trailer</div></a></div> */}
            </div>&emsp;
           <div className='sboxx1'>
           <div className='v5'>Runtime : {movies.runtime}</div>
           <div className='v5'>Release Date : {movies.date}</div>
           <Stack spacing={1}><Rating name="half-rating-read" deafultVlaue={2.5} precision={0.5} value={movies.rating} readOnly /></Stack><br></br>
           <div>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button className="BUTTON">
              <Link to={`/editMovies/${movies.id}`}><img src="edit.png" height="25px" width="25px"></img></Link>
              </button>
              
              <button className="BUTTON" backgroundColor="#141E30" onClick= {() => deleteMovie(movies.id)}><img src="delete.png" height="25px" width="25px"></img></button></div>
            
            </div>
           </div><br></br>
          </div>
        </div>
        <br></br><br></br>
      </div>
          )
        }
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <Footer/>
      {/* <table className="table table-striped table-dark">
      <thead>
        <th>ID</th>
        <th>Movie</th>
        <th>Year</th>
        <th>Cast</th>
        <th>Film Maker</th>
        <th>Actions</th>
        
      </thead>
      
      <tbody>
        {
            movies.map(
                movies =>
                
                <tr key = {movies.id}>
                   <td>{movies.id}</td>
                    <td> {movies.filmname}</td>
                    <td> {movies.year} </td>
                    <td> {movies.filmactor}</td>
                    <td>{movies.filmmaker}</td>
                    
                    <td>
                      <Link className="btn btn-info" to={`/editMovies/${movies.id}`}>Update</Link>
                      <button className="btn btn-danger" onClick= {() => deleteMovie(movies.id)}
                      style = {{marginLeft:"10px"}}>Delete</button>
                    </td>
                </tr>
            )
        }
      </tbody>
      </table> */}
    </div>
      </div>
      
    </div>
    
  )
}

export default New;

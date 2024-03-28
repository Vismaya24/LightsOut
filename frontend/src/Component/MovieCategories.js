import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MovieCategoriesDataView } from '../services/UserService';

const MovieCategories = () => {
  const { genre } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MovieCategoriesDataView(genre) ;
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [genre]);

  return (
    <>
      <Loader />
      <div className='main'>
        <div className='game-container'>
          {movie.map((movie) => (
            <div className="card" key={movie.id}>
              <div className="front">
                <img className="img" src={movie.filmname} alt="Game-img" />
              </div>
              <div className="back">
                <div className="contents">
                  <h2 className="title">{movie.filmmaker}</h2>
                  <p className="text">{movie.genre}</p>
                  <h3 className="subtitle">₹ {movie.language}</h3>
                  <div className='socials'>
                    <Link to={`/movie/${movie.id}`}>
                      <button className="rounded-button login-cta"> View </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCategories;

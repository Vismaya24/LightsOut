import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MovieCategoriesData } from '../services/UserService';

const Category = () => {
  const [movieCategories, setMovieCategories] = useState([]);

  useEffect(() => {
    const fetchMovieCategories = async () => {
      try {
        const response = await MovieCategoriesData() ;
        setMovieCategories(response.data);
      } catch (error) {
        console.error('Error fetching game categories:', error);
      }
    };

    fetchMovieCategories();
  }, []);

  return (
    <>
      <div className="category-card-container">
        {movieCategories.map((category, index) => (
          <Link to={`/game/categories/${category}`} key={index}>
            <div className="category-card-card">
              <h2 className="category-card-title">{category}</h2>
              <p className="category-card-data">[view]</p>
              <div className="category-card-pic" />
              <span className="category-card-button" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;

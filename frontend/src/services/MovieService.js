import axios from 'axios';

const MOVIE_BASE_REST_API_URL= 'http://localhost:8080/api/project/films';
 
class MovieService{
    // getFilm(movieId, movie)
    // {
    //     return axios.get(MOVIE_BASE_REST_API_URL + '/' + movieId, movie);
    // }
    getAllMovies()
    {
        return axios.get(MOVIE_BASE_REST_API_URL)
    }
    createMovie(movies)
    {
        return axios.post(MOVIE_BASE_REST_API_URL, movies)
    }
    getMovieById(movieId)
    {
        return axios.get(MOVIE_BASE_REST_API_URL + '/' + movieId);
    }
    updateMovie(movieId, movies)
    {
        return axios.put(MOVIE_BASE_REST_API_URL + '/' + movieId, movies);
    }
    deleteMovie(movieId)
    {
        return axios.delete(MOVIE_BASE_REST_API_URL + '/' + movieId);
    }
    // getMovieByName(filmname)
    // {
    //     return axios.get(MOVIE_BASE_REST_API_URL + '/' + filmname);
    // }
    // getMovieByGenre(genre)
    // {
    //     return axios.get(MOVIE_BASE_REST_API_URL + '/' + genre);
    // }
    // getMovie(movieId)
    // {
    //     return axios.put(MOVIE_BASE_REST_API_URL + '/movie' + movieId);
    // }
}
export default new MovieService();


import React, { useState } from "react";
import { Button, Carousel, Form } from "react-bootstrap";
import axios from "axios";
import MovieCard from "./MovieCard";
import FavoritedMovies from "./FavoritedMovies";

function WatchList() {
  const [movies, setMovies] = useState([]);
  const [movieToSearch, setMovieToSearch] = useState("");

  const searchUrl = "http://www.omdbapi.com/?s=";
  const apiKey = "&type=movie&apikey=25992c34";



  const searchMovie = async (e) => {
    e.preventDefault();
    let res = await axios.get(`${searchUrl}${movieToSearch}${apiKey}`);
    console.log(res.data);
    setMovies(res.data.Search || []);
    setMovieToSearch("");
  };

  const handleOnChange = (event) => {
    setMovieToSearch(event.target.value);
  };

  function resetMovies(){
    setMovies("");
  }

  return (
    <div className="watch-list-container">
      <Form>
        <input className="search-movie-text" type="text" placeholder="Search Movie" value={movieToSearch} onChange={handleOnChange} />
        <Button className="search-movie-button" type="submit" variant="success" onClick={searchMovie}>Search Movie</Button>
        <Button className="reset-movie-button" variant="danger" onClick={resetMovies}>Reset</Button>
      </Form>

      {/* Display the list of movies */}
      {movies.length > 0 && (
        <div className="movie-cards">
          <Carousel style={{ width: '25rem', height:'550px'}}>
          {movies.map((movie) => (
            <Carousel.Item key={movie.imdbID}>
              <center>
            <MovieCard  movie={movie}></MovieCard>
            </center>
            </Carousel.Item>
          ))}
          </Carousel>
        </div>
      )}
      <FavoritedMovies />
    </div>
  );
}

export default WatchList;

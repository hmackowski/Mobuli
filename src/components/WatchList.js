import React, { useState } from "react";
import { Button, Carousel, Form } from "react-bootstrap";
import axios from "axios";
import MovieCard from "./MovieCard";
import FavoritedMovies from "./FavoritedMovies";

function WatchList() {
  const [movies, setMovies] = useState([]);
  const [movieToSearch, setMovieToSearch] = useState("");
  const [faveMovies, setFaveMovies] = useState([]);

  const searchUrl = "https://www.omdbapi.com/?s=";
  const apiKey = "&type=movie&apikey=25992c34";

  const searchMovie = async (e) => {
    e.preventDefault();
    let res = await axios.get(`${searchUrl}${movieToSearch}${apiKey}`);
    console.log(`${searchUrl}${movieToSearch}${apiKey}`)
    console.log(res.data);
    setMovies(res.data.Search || []);
    setMovieToSearch("");
  };

  const handleOnChange = (event) => {
    setMovieToSearch(event.target.value);
  };

  function resetMovies() {
    setMovies([]);
  }

  // Function to add a new movie to the favorites list
  const addMovieToFavorites = (movie) => {
    setFaveMovies((prevFaveMovies) => [...prevFaveMovies, movie]);
  };

  return (
    <div className="watch-list-container">
      <Form>
        <input
          className="search-movie-text"
          type="text"
          placeholder="Search Movie"
          value={movieToSearch}
          onChange={handleOnChange}
        />
        <Button
          className="search-movie-button"
          type="submit"
          variant="success"
          onClick={searchMovie}
        >
          Search Movie
        </Button>
        <Button
          className="reset-movie-button"
          variant="danger"
          onClick={resetMovies}
        >
          Reset
        </Button>
      </Form>

      {movies.length > 0 && (
        <div className="movie-cards">
          <Carousel style={{ width: "25rem", height: "550px" }}>
            {movies.map((movie) => (
              <Carousel.Item key={movie.imdbID}>
                <center>
                  <MovieCard
                    movie={movie}
                    addMovieToFavorites={addMovieToFavorites}
                  />
                </center>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
      <FavoritedMovies faveMovies={faveMovies} setFaveMovies={setFaveMovies} />
    </div>
  );
}

export default WatchList;

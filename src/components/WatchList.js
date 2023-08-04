import React, { useState } from "react";
import { Button, Carousel, Form } from "react-bootstrap";
import axios from "axios";
import MovieCard from "./MovieCard";
import FavoritedMovies from "./FavoritedMovies";

function WatchList() {
  // State to store the searched movies, the movie to search, and the favorite movies list
  const [movies, setMovies] = useState([]);
  const [movieToSearch, setMovieToSearch] = useState("");
  const [faveMovies, setFaveMovies] = useState([]);

  // API URL and key for searching movies
  const searchUrl = "https://www.omdbapi.com/?s=";
  const apiKey = "&type=movie&apikey=25992c34";

  // Function to search for a movie when the "Search Movie" button is clicked
  const searchMovie = async (e) => {
    e.preventDefault();
    let res = await axios.get(`${searchUrl}${movieToSearch}${apiKey}`);
    console.log(`${searchUrl}${movieToSearch}${apiKey}`);
    console.log(res.data);
    setMovies(res.data.Search || []);
    setMovieToSearch("");
  };

  // Function to handle changes in the search input
  const handleOnChange = (event) => {
    setMovieToSearch(event.target.value);
  };

  // Function to reset the searched movies list
  function resetMovies() {
    setMovies([]);
  }

  // Function to add a new movie to the favorites list
  const addMovieToFavorites = (movie) => {
    setFaveMovies((prevFaveMovies) => [...prevFaveMovies, movie]);
  };

  return (
    <div className="watch-list-container">
      {/* Search form */}
      <Form>
        {/* Input field to search for a movie */}
        <input
          className="search-movie-text"
          type="text"
          placeholder="Search Movie"
          value={movieToSearch}
          onChange={handleOnChange}
        />
        {/* Button to initiate movie search */}
        <Button
          className="search-movie-button"
          type="submit"
          variant="success"
          onClick={searchMovie}
        >
          Search Movie
        </Button>
        {/* Button to reset the searched movies list */}
        <Button
          className="reset-movie-button"
          variant="danger"
          onClick={resetMovies}
        >
          Reset
        </Button>
      </Form>

      {/* Display searched movies in a carousel */}
      {movies.length > 0 && (
        <div className="movie-cards">
          <Carousel style={{ width: "25rem", height: "550px" }}>
            {movies.map((movie) => (
              <Carousel.Item key={movie.imdbID}>
                <center>
                  {/* Render a MovieCard component for each searched movie */}
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

      {/* Display the list of favorited movies */}
      <FavoritedMovies faveMovies={faveMovies} setFaveMovies={setFaveMovies} />
    </div>
  );
}

// Export the WatchList component to be used in other parts of the application
export default WatchList;

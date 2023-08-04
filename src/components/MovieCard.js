import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieProfile from "./MovieProfile";

function MovieCard({ movie, addMovieToFavorites }) {
  // API URL for adding a movie to favorites
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  // Object representing the movie to be added to favorites
  const movieToAdd = {
    Title: movie.Title,
    Poster: movie.Poster,
    Year: movie.Year,
    Watched: false,
    imdbID: movie.imdbID,
  };

  // Function to add a movie to favorites
  const addMovieToFave = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add the movie to favorites in the API
      let res = await axios.post(url, movieToAdd);
      console.log("Movie added successfully!", res.data);
      addMovieToFavorites(res.data); // Call the addMovieToFavorites prop function to update the parent component's state
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        {/* Link the movie card image to its detailed profile page */}
        <Link to={`/movieProfile/${movie.imdbID}`} element={<MovieProfile />}>
          <Card.Img
            src={movie.Poster}
            alt={movie.Title}
            style={{ height: "350px" }}
          />
        </Link>
        <Card.Body>
          <Card.Title>
            {movie.Title}: {movie.Year}
          </Card.Title>
          <Card.Text className="add-button">
            {/* Button to add the movie to favorites */}
            <Button variant="success" onClick={addMovieToFave}>
              +
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieCard component to be used in other parts of the application
export default MovieCard;

import React from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieProfile from "./MovieProfile";

function MovieCard({ movie, addMovieToFavorites }) {
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  const movieToAdd = {
    Title: movie.Title,
    Poster: movie.Poster,
    Year: movie.Year,
    Watched: false,
    imdbID: movie.imdbID,
  };

  const addMovieToFave = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(url, movieToAdd);
      console.log("Movie added successfully!", res.data);
      addMovieToFavorites(res.data); // Call the addMovieToFavorites prop function
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  return (
    <div className="movie-card">
      <Card style={{ width: "18rem" }}>
        <Link to={`/movieProfile/${movie.imdbID}`}
  element={<MovieProfile />}>
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
            <Button variant="success" onClick={addMovieToFave}>
              +
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;

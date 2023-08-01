import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieProfile from "./MovieProfile";

function FavoritedMovies({ faveMovies, setFaveMovies }) {
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  useEffect(() => {
    // This will run when the component mounts or whenever the faveMovies prop changes.
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setFaveMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [setFaveMovies]);

  async function deleteFavorited(favIndex) {
    try {
      const response = await axios.delete(`${url}/${favIndex}`);
      console.log("Movie deleted successfully:", response.data);

      // After deletion, update the state to remove the deleted movie from the list
      setFaveMovies((prevFaveMovies) =>
        prevFaveMovies.filter((movie) => movie.id !== favIndex)
      );
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  }

  async function toggleWatchedStatus(movieId) {
    try {
      // Find the movie by its ID in the state array
      const movieToUpdate = faveMovies.find((movie) => movie.id === movieId);

      // Toggle the "Watched" property value
      movieToUpdate.Watched = !movieToUpdate.Watched;

      // Update the movie's status in the API
      await axios.put(`${url}/${movieId}`, movieToUpdate);

      // Update the state with the modified movie list
      setFaveMovies([...faveMovies]);
    } catch (error) {
      console.error("Error updating movie status:", error);
    }
  }

  return (
    <div>
      <h2>Movies to Watch</h2>
      <Container className="FaveMovie">
        {faveMovies.map((favMovie, index) => (
          <Card className="fav-card" key={index} style={{ width: "18rem" }}>
            <Link to={`/movieProfile/${favMovie.imdbID}`} element={<MovieProfile favMovie={faveMovies}/>} >
              <Card.Img
                src={favMovie.Poster}
                alt={favMovie.Title}
                style={{ height: "350px" }}
              />
            </Link>
            <Card.Body>
              <Card.Title>
                {favMovie.Title}: {favMovie.Year}
              </Card.Title>
              <Card.Text className="add-button">
                <Button
                  className={
                    favMovie.Watched
                      ? "watched-button-color"
                      : "watch-button-color"
                  }
                  onClick={() => toggleWatchedStatus(favMovie.id)}
                  variant={favMovie.Watched ? "warning" : "success"}
                >
                  {favMovie.Watched ? "Watched" : "Watch"}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteFavorited(favMovie.id)}
                >
                  Remove
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default FavoritedMovies;

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios'; // Import the axios library

function MovieCard({ movie }) {

  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";
  let movieToAdd = {
    Title: movie.Title,
    Poster: movie.Poster,
    Year: movie.Year,
    Watched: false
  };

  const addMovieToFave = async (e) => {
    e.preventDefault();
    try {
      // Make the POST request with axios
      let res = await axios.post(url, movieToAdd);
      console.log("Movie added successfully!", res.data);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  console.log(movie.Title, "movie card");
  return (
    <div className='movie-card'>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={movie.Poster} alt={movie.Title} style={{ height: '350px' }} />
        <Card.Body>
          <Card.Title>{movie.Title}: {movie.Year}</Card.Title>
          <Card.Text className='add-button'>
            <Button variant='success' onClick={addMovieToFave}>+</Button> {/* Add onClick handler */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard;

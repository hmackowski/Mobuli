import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Randomizer() {
  const [randomMovie, setRandomMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setRandomMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  function selectRandomMovie() {

    const randomIndex = Math.floor(Math.random() * randomMovie.length);
    const selectedMovie = randomMovie[randomIndex];
    setSelectedMovie(selectedMovie);
  }

  // Check if the randomMovie array is empty or data hasn't been fetched yet
  if (randomMovie.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={selectRandomMovie}>Random Movie</Button>

      {/* Display the selected movie */}
     
        <div className="random-movie-selected">
          <h2>Selected Movie:</h2>
          <p>Title: {selectedMovie.Title}</p>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        </div>
      

    </div>
  );
}

export default Randomizer;

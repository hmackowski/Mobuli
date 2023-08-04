import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Randomizer() {
  // State to store movie data and the selected random movie
  const [randomMovie, setRandomMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  // API URL for fetching movie data
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  // State to display text indicating random movie selection
  const [selectText, setSelectText] = useState(
    "Click Random Movie and let Randomizer pick a movie for you."
  );

  // Fetch movie data from the API using axios when the component mounts
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

  // Function to select a random movie from the fetched movie data
  function selectRandomMovie() {
    setSelectText("Randomizer chose:");
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
      {/* Button to trigger random movie selection */}
      <Button className="random-button" onClick={selectRandomMovie}>
        Random Movie
      </Button>

      {/* Display the selected movie */}
      <div className="random-movie-selected">
        <h2>{selectText}</h2>
        <p>Title: {selectedMovie.Title}</p>
        <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      </div>
    </div>
  );
}

// Export the Randomizer component to be used in other parts of the application
export default Randomizer;

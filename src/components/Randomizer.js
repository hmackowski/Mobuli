import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import MovieProfile from "./MovieProfile";
import { Link } from "react-router-dom";

function Randomizer() {
  // State to store movie data and the selected random movie
  const [randomMovie, setRandomMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [selectText, setSelectText] = useState(
    "Click Random Movie and let Randomizer pick a movie for you."
  );

  // API URL for fetching movie data
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";

  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);

  // Fetch movie data from the API using axios when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setRandomMovie(response.data);
        setIsLoading(false); // Set loading status to false after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading status to false even if there's an error
      }
    }

    fetchData();
  }, []);

  // Function to select a random movie from the fetched movie data
  function selectRandomMovie() {
    setSelectText("Randomizer chose:");
    setSelectedMovie({}); // Reset selected movie

    // Display each movie poster with a delay using recursive function
    loopRandomSelection(randomMovie, 0);
  }

  // Recursive function to loop through random movie selection
  function loopRandomSelection(movieList, index) {
    // Check if we have gone through the array twice and if index is the selected movie index
    if (index === randomMovie.length * 2) {
      const randomIndex = Math.floor(Math.random() * movieList.length);
      setSelectedMovie(movieList[randomIndex]);
    } else {
      setTimeout(() => {
        setSelectedMovie(movieList[index % movieList.length]);
        loopRandomSelection(movieList, index + 1); //using a recursive function
      }, 50); // Delay for 0.05 seconds before selecting the next movie
    }
  }

  // Check if the randomMovie array is empty or data is still loading
  if (randomMovie.length === 0 || isLoading) {
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
        {Object.keys(selectedMovie).length > 0 && (
          <>
            <p>Title: {selectedMovie.Title}</p>
            <Link
              to={`/movieProfile/${selectedMovie.imdbID}`}
              element={<MovieProfile />}
            >
              <img
                src={selectedMovie.Poster}
                alt={selectedMovie.Title}
                style={{ height: "500px" }}
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

// Export the Randomizer component to be used in other parts of the application
export default Randomizer;

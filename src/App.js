import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import NavbarMain from "./components/NavbarMain";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieProfile from "./components/MovieProfile";
import Randomizer from "./components/Randomizer";

function App() {
  // API URLs
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";
  const link =
    "https://www.omdbapi.com/?t=Star%20Wars:%20Episode%20IV%20-%20A%20New%20Hope&type=movie&apikey=25992c34";

  // State to store movie data
  const [movieData, setMovieData] = useState([]);

  // Fetch movie data from the API using axios when the component mounts
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(url);
      // TODO: You might want to set the retrieved data to the movieData state using setMovieData function
    };
    // Call the function to fetch data
    getData();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <Router>
      {/* Move the Router component here to wrap the entire app */}
      <div className="App">
        {/* Navbar component */}
        <NavbarMain />

        {/* Router components to define different routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movieProfile/:key" element={<MovieProfile />} />
          <Route path="/random" element={<Randomizer />} />

          {/* If no matching route found, show PageNotFound component */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

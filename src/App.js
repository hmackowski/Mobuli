import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import WatchList from './components/WatchList';
import NavbarMain from './components/NavbarMain';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieProfile from './components/MovieProfile';
import Randomizer from './components/Randomizer'


function App() {
  const url = "https://64bb395a5e0670a501d6e2f1.mockapi.io/mobuli/userMovies";
 const link = "https://www.omdbapi.com/?t=Star%20Wars:%20Episode%20IV%20-%20A%20New%20Hope&type=movie&apikey=25992c34";
const [movieData, setMovieData] = useState([]);

useEffect(() =>{
  const getData = async () =>{
    let res = await axios.get(url)
  }
})


  return (
    <Router> {/* Move the Router component here to wrap the entire app */}

        <div className="App">
          <NavbarMain />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/movieProfile/:key" element={<MovieProfile />} />
            <Route path="/random"  element={<Randomizer />} />
            <Route path="*" element={<PageNotFound />} />            
          </Routes>
        </div>
        <Footer />

    </Router>
  );
}

export default App;

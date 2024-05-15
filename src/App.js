import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import NavbarMain from "./components/NavbarMain";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import MovieProfile from "./components/MovieProfile";
import Randomizer from "./components/Randomizer";
import Register from "./components/Register";

function App() {
  
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
          <Route path="/register" element={<Register />} />

          {/* If no matching route found, show PageNotFound component */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/*<SideBar />*/}
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

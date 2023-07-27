import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import WatchList from './components/WatchList';
import NavbarMain from './components/NavbarMain';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router> {/* Move the Router component here to wrap the entire app */}
      <div className="App">
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function MovieProfile() {
  // Get the movieId from the URL parameters
  const movieId = useParams();
  
  // State to store the movie information
  let [movieInfo, setMovieInfo] = useState({});

  // Fetch movie data using the movieId from the URL when the component mounts
  useEffect(() =>{
    async function getMovieData(){
      const res = await axios.get(`https://www.omdbapi.com/?i=${movieId.key}&type=movie&apikey=25992c34`)
      console.log(res.data);
      setMovieInfo(res.data);
    }
    console.log(movieId.key)
    getMovieData();
  }, []);

  return (
    <Container style={{backgroundColor: '#2C3034'}}>
      {/* First Row */}
      <Row>
        <Col xs={12} md={6}>
          {/* Display the movie poster */}
          <div style={{ padding: '10px' }}>
            <img  style={{border: '2px solid white'}} src={movieInfo.Poster} alt={movieInfo.Title} />
          </div>
        </Col>
        <Col xs={12} md={5} style={{ backgroundColor: 'black', margin: '10px' }}>
          {/* Display the movie details in a table */}
          <div style={{ backgroundColor: 'black', padding: '10px' }}>
            <h2 style={{color: 'white'}}>{movieInfo.Title}</h2>
            <Table variant="dark" striped bordered hover>
              <tbody>
                <tr>
                  <th>Year Released</th>
                  <th>{movieInfo.Year}</th>
                </tr>
                <tr>
                  <th>Rated</th>
                  <th>{movieInfo.Rated}</th>
                </tr>
                <tr>
                  <th>Genre</th>
                  <th>{movieInfo.Genre}</th>
                </tr>
                <tr>
                  <th>Runtime</th>
                  <th>{movieInfo.Runtime}</th>
                </tr>
                <tr>
                  <th>Director</th>
                  <th>{movieInfo.Director}</th>
                </tr>
                <tr>
                  <th>Actors</th>
                  <th>{movieInfo.Actors}</th>
                </tr>
                <tr>
                  <th>IMDB Rating:</th>
                  <th>{movieInfo.imdbRating}</th>
                </tr>
                <tr>
                  <th>Domestic Box Office:</th>
                  <th>{movieInfo.BoxOffice}</th>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col xs={12}>
          {/* Display the movie plot */}
          <div style={{ color: 'white', backgroundColor: '#212529', padding: '15px', height: '300px' }}>
            <h2>Movie Plot</h2>
            <br />
            {movieInfo.Plot}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

// Export the MovieProfile component to be used in other parts of the application
export default MovieProfile;

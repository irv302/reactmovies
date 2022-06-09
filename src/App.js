import React, { useState } from 'react';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

import './App.css';

function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

const getMovie = async (searchTerm) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`  
    )
    // Parse JSOM response request and store response
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);

};
React.useEffect(() => {
  getMovie();
}, []); 

  return (
    <div className="App">
      <Form moviesearch={getMovie} /> 
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  function stopRetrying() {
    setRetrying(false);
  }

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/film/')
      if (!response.ok) {
        setRetrying(true);
        if (retrying) {
         setInterval(() => {
            fetchMovieHandler();
          }, 5000)
        }
       
        throw new Error('Something went wrong ....Retrying');
      }
      const data = await response.json()

      const transformMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })
      setMovies(transformMovies)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
        <button onClick={stopRetrying}>Cancel</button>
      </section>
      <section>

        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && movies.length === 0 && !error && <h1>No Movie is Found</h1>}
        {isLoading && <h1>Loading...</h1>}
      </section>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, i) => {
        return <div key={i}>
          <h2>{movie.title}</h2>
          <p>{movie.time} minutes</p>
          <ul>
            {movie.genres.map((genre, i) => {
              return <li key={i}>{genre}</li>
            })}
          </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;

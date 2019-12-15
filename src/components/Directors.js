import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map((director, i) => {
        return <div key={i}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => {
              return <li key={i}>{movie}</li>
            })}
          </ul>
        </div>
      })}

    </React.Fragment>
  );
}

export default Directors

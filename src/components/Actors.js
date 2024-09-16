import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => {
        return <div key={i}>
          <h1>{actor.name}</h1>
          <ul>
            {actor.movies.map((movie, i) => {
              return <li key={i}>{movie}</li>
            })}
          </ul>
        </div>
      })}
    </React.Fragment>
  );
};

export default Actors;

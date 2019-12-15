import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  padding: '12px'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink style={link} to="/" exact>Home</NavLink>
      <NavLink style={link} to="/movies" exact>Movies</NavLink>
      <NavLink style={link} to="/directors" exact>Directors</NavLink>
      <NavLink style={link} to="/actors" exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;

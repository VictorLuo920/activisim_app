import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = 
    <div>
      <Link to='/' className='NavBar-link'>HOME</Link>
         &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/create' className='NavBar-link'>CREATE TOPIC</Link>
         &nbsp;&nbsp;|&nbsp;&nbsp;
    </div>;
   
    
  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
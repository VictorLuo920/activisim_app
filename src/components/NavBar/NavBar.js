import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Link to="/login" className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/" className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/about" className='NavBar-link'>About</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/terms" className='NavBar-link'>Terms</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/resources" className='NavBar-link'>Resources</Link>
    </div>
  );
};

export default NavBar;
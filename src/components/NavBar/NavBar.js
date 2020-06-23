import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div className='NavBar'>
            <Link to='' className='NavBar-link' onClick={props.handleLogout} >Log out</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
        </div>
        :
        <div className='NavBar'>
            <Link to="/login" className='NavBar-link'>Log in</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup" className='NavBar-link'>Sign up</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
        </div>

    return (
        <div className='NavBar'>
            <Link to="/" className='NavBar-link'>Home</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about" className='NavBar-link'>About</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/terms" className='NavBar-link'>Terms</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/resources" className='NavBar-link'>Resources</Link>
            {nav}
        </div>
    );
};

export default NavBar;
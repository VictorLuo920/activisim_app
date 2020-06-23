import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div className='NavBar-link'>
            <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </div>
        :
        <div className='NavBar'>
            <Link to="/login" className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
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
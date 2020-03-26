import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>My ToDo List</h1>
            <Link to="/" style={linkStyle}>Home </Link> | 
            <Link to="/About" style={linkStyle}> About</Link>
        </header>
    )
}

const headerStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    background: '#333'
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
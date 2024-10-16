import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">My WebUI</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
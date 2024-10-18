import React from 'react';
import { Link } from 'react-router-dom';
import ProtectedLink from './ProtectedLink'; // 引入 ProtectedLink 组件
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">My WebUI</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <ProtectedLink to="/features">Features</ProtectedLink>
        <ProtectedLink to="/contact">Contact</ProtectedLink>
      </nav>
    </header>
  );
}

export default Header;
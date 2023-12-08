import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function Navbar() {
  const currentPage = useLocation().pathname;

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  return (
    <nav className="nav nav-tabs py-2">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className={`nav-link ${currentPage === item.to ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;

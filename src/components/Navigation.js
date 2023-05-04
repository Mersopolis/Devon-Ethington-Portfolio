import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
        </li>
        <li className="nav-item">
          <a href="#aboutme" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Info</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;

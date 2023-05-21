import React from 'react';

const Header = () => (
  <header>
    <nav className="toolbar">
      <a href="/" id="author-name">Emmanuel Orji</a>
      <div id="mobile-menu">
        <i className="fa-solid fa-bars" id="hamburger" />
        <i className="fas fa-times close" />
      </div>
      <ul id="nav-menu">
        <li><a href="#my-works">Portfolio</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#contact-me">Contact</a></li>
        <li><i className="fa-regular fa-envelope" /></li>
      </ul>
    </nav>
  </header>
);

export default Header;

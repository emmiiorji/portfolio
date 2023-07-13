import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <header>
      <nav
        className={`toolbar ${menuOpen ? 'show-mobile-menu' : ''}`}
        style={{ animation: `${menuOpen ? 'slideIn 1s ease-in-out' : ''}` }}
      >
        <a href="/" id="author-name">Emmanuel Orji</a>
        <div id="mobile-menu">
          <GiHamburgerMenu
            id="hamburger"
            style={{ display: `${!menuOpen && (windowWidth < 768) ? 'inline' : 'none'}` }}
            onClick={toggleMenu}
          />
          <AiOutlineClose
            className="close"
            style={{ display: `${menuOpen ? 'inline' : 'none'}` }}
            onClick={toggleMenu}
          />
        </div>
        <ul id="nav-menu">
          <li><a href="#my-works" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#about-me" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact-me" onClick={toggleMenu}>Contact</a></li>
          <li><BsFillEnvelopeFill className="fa-envelope" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

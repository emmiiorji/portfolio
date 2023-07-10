import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className={`toolbar ${menuOpen ? 'show-mobile-menu' : ''}`}>
        <a href="/" id="author-name">Emmanuel Orji</a>
        <div
          id="mobile-menu"
          tabIndex={0}
          role="button"
          onKeyDown={toggleMenu}
        >
          <GiHamburgerMenu
            id="hamburger"
            style={{ display: `${menuOpen ? 'none' : 'inline'}` }}
            onClick={(event) => { if (event.key === 'Enter') toggleMenu(); }}
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
          <li><BsFillEnvelopeFill /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

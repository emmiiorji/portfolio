import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const toggleMenu = (event, menuClosing) => {
    if (menuClosing) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(!menuOpen);
        setMenuClosing(false);
      }, 800); // Waiting for closing menu animation to finish
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <header className="font-roboto">
      <nav
        className={`flex ${menuOpen ? 'animate-slideIn flex-col bg-customGrey h-screen w-screen absolute ' : 'justify-between'} ${`${menuClosing ? 'animate-slideOut' : ''}`} py-2.5 px-3 bg-customGrey h-12 text-white toolbar`}
      >
        <a className={`${menuOpen ? 'hidden' : ''}`} href="/" id="author-name">Emmanuel Orji</a>
        <div className={`mr-3 flex items-center ${menuOpen ? 'self-end ' : ''}`} id="mobile-menu">
          <GiHamburgerMenu
            id="hamburger"
            className={`${!menuOpen && isMobile ? '' : 'hidden'}`}
            onClick={toggleMenu}
          />
          <AiOutlineClose
            className={`${!menuOpen ? 'hidden' : ''}`}
            onClick={(event) => toggleMenu(event, true)}
          />
        </div>
        <ul
          className={`px-3 py-2.5 flex gap-4 ${menuOpen ? 'text-customMilk text-3xl/[44px] font-bold flex-col' : `${isMobile ? 'hidden' : 'font-semibold items-center'}`}`}
          id="nav-menu"
        >
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''}`}>
            <a href="#my-works" className={`${menuOpen ? 'p-4' : ''}`} onClick={(event) => toggleMenu(event, true)}>Portfolio</a>
          </li>
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''}`}>
            <a href="#about-me" className={`${menuOpen ? 'p-4' : ''}`} onClick={(event) => toggleMenu(event, true)}>About</a>
          </li>
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''}`}>
            <a href="#contact-me" className={`${menuOpen ? 'p-4' : ''}`} onClick={(event) => toggleMenu(event, true)}>Contact</a>
          </li>
          <li><BsFillEnvelopeFill className={`${menuOpen ? 'hidden' : ''}`} /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import useWindowWidth from '../../hooks/useWindowWidth';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const { isMobile } = useWindowWidth();

  const toggleMenu = (event, menuClosing) => {
    if (menuClosing) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuClosing(false);
        setMenuOpen(false);
      }, 800); // Waiting for closing menu animation to finish
    } else if (isMobile) setMenuOpen(!menuOpen);
  };

  return (
    <header className="font-roboto">
      <nav
        className={`flex ${`${menuClosing ? 'animate-slideOut' : ''}`} ${menuOpen ? 'animate-slideIn flex-col h-screen w-screen fixed z-10' : 'justify-between px-3'} bg-customGrey text-white pr-0 md:items-center md:px-[10.416%]`}
      >
        <a className={`self-center ${menuOpen ? 'hidden' : ''}`} href="/" id="author-name">Emmanuel Orji</a>
        <div className={`p-4 flex items-center ${menuOpen ? 'self-end ' : ''}`} id="mobile-menu">
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
          className={`flex md:pr-0 ${menuOpen ? 'text-customMilk text-3xl/[44px] font-bold flex-col px-6' : `${isMobile ? 'hidden' : 'font-semibold items-center p-2'}`}`}
          id="nav-menu"
        >
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#my-works" onClick={(event) => toggleMenu(event, menuOpen)}>Portfolio</a>
          </li>
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#about-me" onClick={(event) => toggleMenu(event, menuOpen)}>About</a>
          </li>
          <li className={`${menuOpen ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#contact-me" onClick={(event) => toggleMenu(event, menuOpen)}>Contact</a>
          </li>
          <li className={`${menuOpen ? 'hidden' : ''} hover:bg-customOrange hover:rounded p-2.5`}><BsFillEnvelopeFill /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

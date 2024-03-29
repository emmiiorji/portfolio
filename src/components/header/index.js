import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import useWindowWidth from '../../hooks/useWindowWidth';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const { isMobile } = useWindowWidth();
  const toShowMenu = menuOpen && isMobile;

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
        className={`flex ${menuClosing ? 'animate-slideOut' : ''} ${toShowMenu ? 'animate-slideIn flex-col h-screen w-screen fixed z-10' : 'justify-between px-3'} bg-customGrey text-white pr-0 md:items-center md:px-[10.416%]`}
      >
        <a className={`self-center ${toShowMenu ? 'hidden' : ''}`} href="/" id="author-name">Emmanuel Orji</a>
        <div className={`p-4 flex items-center ${toShowMenu ? 'self-end' : ''}`} id="mobile-menu">
          <GiHamburgerMenu
            className={`${!menuOpen && isMobile ? '' : 'hidden'}`}
            onClick={toggleMenu}
          />
          <AiOutlineClose
            className={`${!toShowMenu ? 'hidden' : ''}`}
            onClick={(event) => toggleMenu(event, true)}
          />
        </div>
        <ul
          className={`flex md:pr-0 ${toShowMenu ? 'text-customMilk text-3xl/[44px] font-bold flex-col px-6' : `${isMobile ? 'hidden' : 'font-semibold items-center p-2'}`}`}
        >
          <li className={`${toShowMenu ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#my-works" onClick={(event) => toggleMenu(event, menuOpen)}>Portfolio</a>
          </li>
          <li className={`${toShowMenu ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#about-me" onClick={(event) => toggleMenu(event, menuOpen)}>About</a>
          </li>
          <li className={`${toShowMenu ? 'border-b border-customLighterGray' : ''} hover:bg-customOrange hover:rounded p-2`}>
            <a href="#contact-me" onClick={(event) => toggleMenu(event, menuOpen)}>Contact</a>
          </li>
          <li className={`${toShowMenu ? 'hidden' : ''} hover:bg-customOrange hover:rounded p-2.5`}><BsFillEnvelopeFill /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

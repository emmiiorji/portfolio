import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaAngellist, FaTwitter, FaMediumM,
} from 'react-icons/fa';

const Socials = () => (
  <ul className="socials">
    <li>
      <a href="https://github.com/emmiiorji">
        <FaGithub className="icon" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/orji-emmanuel/">
        <FaLinkedinIn className="icon" />
      </a>
    </li>
    <li>
      <a href="https://angel.co/u/emmanuel-orji-ihuoma">
        <FaAngellist className="icon" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/emmiiorji">
        <FaTwitter className="icon" />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@emmanuelporji">
        <FaMediumM className="icon" />
      </a>
    </li>
  </ul>
);

export default Socials;

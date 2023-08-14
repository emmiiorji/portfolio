import React from 'react';
import PropTypes from 'prop-types';
import {
  FaGithub, FaLinkedinIn, FaAngellist, FaTwitter, FaMediumM,
} from 'react-icons/fa';

const Socials = ({ className }) => (
  <ul className={className}>
    <li>
      <a href="https://github.com/emmiiorji">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/orji-emmanuel/">
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a href="https://angel.co/u/emmanuel-orji-ihuoma">
        <FaAngellist />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/emmiiorji">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@emmanuelporji">
        <FaMediumM />
      </a>
    </li>
  </ul>
);

Socials.defaultProps = {
  className: '',
};

Socials.propTypes = {
  className: PropTypes.string,
};

export default Socials;

import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Dots = ({ dots, currentSlide }) => (
  <ul className="flex justify-center list-none p-0 mt-4">
    {
      dots.map((dot, index) => (
        <li
          key={nanoid()}
          className={`mx-1 w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <button type="button" className="flex items-center justify-center h-full w-full" onClick={dot.props.children.props.onClick}>&nbsp;</button>
        </li>
      ))
    }
  </ul>
);

Dots.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dots: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSlide: PropTypes.number.isRequired,
};

export default Dots;

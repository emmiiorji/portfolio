import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="flex justify-center items-center bg-customOrange h-12 w-16 rounded-l-full cursor-pointer"
    onClick={onClick}
  >
    <BiLeftArrow className="text-3xl col" />
  </button>
);

PrevArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default PrevArrow;

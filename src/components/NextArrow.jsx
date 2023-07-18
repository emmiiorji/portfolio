import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="flex justify-center items-center bg-customOrange h-12 w-16 rounded-r-full cursor-pointer"
    onClick={onClick}
  >
    <BiRightArrow className="text-3xl col" />
  </button>
);

NextArrow.defaultProps = {
  onClick: () => {},
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default NextArrow;

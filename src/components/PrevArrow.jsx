import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-0 -left-10 md:left-1.5 md:z-10 h-full flex items-center">
    <button
      type="button"
      className="flex justify-center items-center bg-customOrange h-12 w-16 rounded-l-full cursor-pointer"
      onClick={onClick}
    >
      <BiLeftArrow className="text-white text-3xl mr-5 md:mr-0 col" />
    </button>
  </div>
);

PrevArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default PrevArrow;

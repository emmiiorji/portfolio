import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const PrevArrow = ({ onClick, firstSlide }) => (
  <div className="absolute top-0 left-0 z-10 h-full flex items-center">
    <button
      type="button"
      className={`flex justify-center items-center ${firstSlide ? 'bg-customLighterGray' : 'bg-customOrange'} h-12 w-16 rounded-l-full cursor-pointer`}
      onClick={onClick}
    >
      <BiLeftArrow className="text-white text-3xl col" />
    </button>
  </div>
);

PrevArrow.defaultProps = {
  onClick: () => {},
};

PrevArrow.propTypes = {
  onClick: PropTypes.func,
  firstSlide: PropTypes.bool.isRequired,
};

export default PrevArrow;

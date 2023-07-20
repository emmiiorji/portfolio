import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const NextArrow = ({ onClick, lastSlide }) => (
  <div className="absolute top-0 right-0 h-full flex items-center">
    <button
      type="button"
      className={`flex justify-center items-center ${lastSlide ? 'bg-customLighterGray' : 'bg-customOrange'} h-12 w-16 rounded-r-full cursor-pointer`}
      onClick={onClick}
    >
      <BiRightArrow className="text-white text-3xl col" />
    </button>
  </div>
);

NextArrow.defaultProps = {
  onClick: () => {},
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
  lastSlide: PropTypes.bool.isRequired,
};

export default NextArrow;

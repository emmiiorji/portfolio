import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import PropTypes from 'prop-types';

const NextArrow = ({ onClick }) => (
  <div className="absolute top-0 -right-10 md:right-1 h-full flex items-center -z-10 md:z-auto">
    <button
      type="button"
      className="flex justify-center items-center bg-customOrange h-12 w-16 rounded-r-full cursor-pointer"
      onClick={onClick}
    >
      <BiRightArrow className="text-white text-3xl ml-5 md:ml-0 col" />
    </button>
  </div>
);

NextArrow.defaultProps = {
  onClick: () => {},
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default NextArrow;

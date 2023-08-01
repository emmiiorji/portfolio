import React from 'react';
import PropTypes from 'prop-types';

const QuoteLine = ({ className }) => (
  <div className={`flex mt-2 h-5 ${className}`}>
    <div className="w-28 xssm:36 h-[2px] bg-customRed" />
    <p className="-mt-2 mx-2 text-customRed font-coustard text-5xl">&quot;</p>
    <div className="w-7 h-0.5 bg-customRed" />
  </div>
);

QuoteLine.defaultProps = {
  className: '',
};

QuoteLine.propTypes = {
  className: PropTypes.string,
};

export default QuoteLine;

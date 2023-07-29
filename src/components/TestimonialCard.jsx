import React from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../hooks/useWindowWidth';

const TestimonialCard = ({
  author, headshot, title, description, isCurrentSlide,
}) => {
  const { isMobile } = useWindowWidth();
  return (
    <div className="relative h-full bg-white rounded-xl my-4">
      <div className={`${isCurrentSlide || isMobile ? '' : 'absolute top-0 left-0 h-full w-full rounded-xl bg-whiteOverlay'}`} />
      <div className={`${isCurrentSlide ? '' : ''} flex flex-col p-4 text-center items-center my-5 rounded-lg`}>
        <div className="flex flex-col justify-between items-center">
          <div className="self-center justify-center rounded-full border-2 box-content border-customRed truncate h-10 w-10">
            <img className="" src={headshot} alt={`${author}'s headshot`} />
          </div>
          <h2 className="text-base">{author}</h2>
          <small className="text-xs">{title}</small>
        </div>
        <p className="text-base/5 mt-2 whitespace-pre-wrap">
          {description.length > 160 ? `${description.slice(0, 160)}....` : description}
        </p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  author: PropTypes.string.isRequired,
  headshot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isCurrentSlide: PropTypes.bool.isRequired,
};

export default TestimonialCard;

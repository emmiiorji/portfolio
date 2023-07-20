import React from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../hooks/useWindowWidth';

const TestimonialCard = ({
  author, headshot, title, description, isCurrentSlide,
}) => {
  const { isMobile } = useWindowWidth();
  return (
    <div className="relative">
      <div className={`${isCurrentSlide || isMobile ? '' : 'absolute top-0 left-0 h-full w-full bg-whiteOverlay rounded-lg'}`} />
      <div className={`${isCurrentSlide ? '' : ''} flex flex-col p-2 text-center justify-between items-center mt-5 bg-white rounded-lg`}>
        <div className="flex flex-col justify-between items-center">
          <div className="self-center justify-center rounded-full truncate h-10 w-10">
            <img className="" src={headshot} alt={`${author}'s headshot`} />
          </div>
          <h2>{author}</h2>
          <h3>{title}</h3>
        </div>
        <p className="">{description}</p>
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

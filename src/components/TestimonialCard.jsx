import React from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../hooks/useWindowWidth';
import QuoteLine from './QuoteLine';

const TestimonialCard = ({
  author, headshot, title, description, isCurrentSlide,
}) => {
  const { isMobile } = useWindowWidth();
  return (
    <div className="relative h-full bg-white rounded-xl">
      <div className={`${isCurrentSlide || isMobile ? '' : 'absolute top-0 left-0 h-full w-full rounded-xl bg-whiteOverlay'}`} />
      <div className="flex flex-col h-full items-center justify-center px-4">
        <QuoteLine className="rotate-180" />
        <div
          className="flex flex-col items-center ssm:items-start ssm:flex-row gap-4 p-2 text-left rounded-lg"
          style={{ background: '#f3f3f3' }}
        >
          <img className="border-customRed border-2 rounded-full w-12 h-12" src={headshot} alt={`${author}'s headshot`} />
          <div className="flex flex-col items-start">
            <h2 className="font-bold text-base self-center ssm:self-start">{author}</h2>
            <small className="text-xs self-center ssm:self-start">{title}</small>
            <p className="text-base/5 mt-2 whitespace-pre-wrap">
              {description.length > 300 ? `${description.slice(0, 300)}....` : description}
            </p>
          </div>
        </div>
        <QuoteLine />
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

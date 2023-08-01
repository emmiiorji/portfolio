import React from 'react';
import PropTypes from 'prop-types';
import useWindowWidth from '../hooks/useWindowWidth';
import QuoteLine from './QuoteLine';

const TestimonialCard = ({
  author, headshot, title, description, isCurrentSlide,
}) => {
  const { isMobile } = useWindowWidth();
  return (
    <div className="relative h-[350px] xssm:h-80 ssm:h-64 bg-white rounded-xl my-4">
      <div className={`${isCurrentSlide || isMobile ? '' : 'absolute top-0 left-0 h-full w-full rounded-xl bg-whiteOverlay'}`} />
      <div className="flex flex-col h-full items-center justify-center p-4">
        <QuoteLine className="rotate-180 mt-0 mb-2 h-6" />
        <div
          className="flex flex-col items-center xssm:items-start xssm:flex-row gap-4 p-2 text-left rounded-lg"
          style={{ background: '#f3f3f3' }}
        >
          <img className="border-customRed border-2 rounded-full w-12 h-12" src={headshot} alt={`${author}'s headshot`} />
          <div className="flex flex-col items-start">
            <h2 className="font-bold text-base self-center xssm:self-start">{author}</h2>
            <small className="text-xs self-center xssm:self-start">{title}</small>
            <p className="text-base/5 mt-2 whitespace-pre-wrap">
              {description.length > 160 ? `${description.slice(0, 160)}....` : description}
            </p>
          </div>
        </div>
        <QuoteLine className="" />
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

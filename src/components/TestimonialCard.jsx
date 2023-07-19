import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({
  author, headshot, title, description,
}) => (
  <div className="flex flex-col p-2 mb-5 text-center justify-between items-center">
    <div className="flex flex-col justify-between items-center">
      <div className="self-center justify-center rounded-full truncate h-10 w-10">
        <img className="" src={headshot} alt={`${author}'s headshot`} />
      </div>
      <h2>{author}</h2>
      <h3>{title}</h3>
    </div>
    <p className="">{description}</p>
  </div>
);

TestimonialCard.propTypes = {
  author: PropTypes.string.isRequired,
  headshot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TestimonialCard;

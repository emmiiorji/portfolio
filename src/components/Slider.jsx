import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

const InvestigatorsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="slider-container">
      <Slider
        prevArrow={<PrevArrow disabled={currentSlide === 0} />}
        nextArrow={<NextArrow disabled={currentSlide === 2} />}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="slider"
        slidesToShow={3}
      />
    </div>
  );
};

export default InvestigatorsSlider;

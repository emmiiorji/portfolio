import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
import testimonials from '../helpers/Testimonials';
import TestimonialCard from './TestimonialCard';
import useWindowWidth from '../hooks/useWindowWidth';
import Dots from './Dots';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { windowWidth } = useWindowWidth();
  const numOfSlides = windowWidth < 768 ? 1 : 3;

  return (
    <section className="flex flex-col items-center mt-32" id="slick">
      <h2 className="text-3xl font-bold text-customOffWhite mb-6 text-center">What they say:</h2>
      <div className="w-full max-w-3xl bg-customLightBlack px-10 md:px-4 tab:px-10 md:box-content rounded-lg">
        <Slider
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          speed={1000}
          dots
          appendDots={(dots) => <Dots dots={dots} currentSlide={currentSlide} />}
          beforeChange={(current, next) => setCurrentSlide(next)}
          className="z-10 py-4"
          slidesToShow={numOfSlides}
          autoplay
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={nanoid()}
              author={testimonial.author}
              headshot={testimonial.headshot}
              title={testimonial.title}
              description={testimonial.description}
              isCurrentSlide={
                index === (currentSlide + testimonials.length + 1) % testimonials.length
              }
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

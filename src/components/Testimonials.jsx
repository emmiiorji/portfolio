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
    <section className="flex flex-col items-center" id="slick">
      <Slider
        prevArrow={<PrevArrow firstSlide={currentSlide === 0} />}
        nextArrow={<NextArrow lastSlide={currentSlide === testimonials.length - numOfSlides} />}
        speed={1000}
        dots
        appendDots={(dots) => <Dots dots={dots} currentSlide={currentSlide} />}
        beforeChange={(current, next) => setCurrentSlide(next)}
        className="w-full max-w-3xl self-center bg-customLightBlack rounded-lg px-10 md:px-0 py-4 mt-5"
        slidesToShow={numOfSlides}
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
    </section>
  );
};

export default Testimonials;

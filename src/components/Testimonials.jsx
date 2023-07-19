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

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { windowWidth } = useWindowWidth();
  return (
    <section className="flex flex-col items-center mt-30">
      <Slider
        prevArrow={<PrevArrow />} // onClick prop is passed in by react-slick
        nextArrow={<NextArrow />}
        beforeChange={(current, next) => setCurrentSlide(next, currentSlide)}
        className="w-full bg-white"
        slidesToShow={windowWidth < 768 ? 1 : 3}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={nanoid()}
            author={testimonial.author}
            headshot={testimonial.headshot}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from '../prevArrrow';
import NextArrow from '../nextArrow';
import testimonials from '../../helpers/Testimonials';
import TestimonialCard from '../testimonial';
import useWindowWidth from '../../hooks/useWindowWidth';
import Dots from '../testimonial/dots';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { windowWidth } = useWindowWidth();
  const numOfSlides = 1;

  return (
    <section className="flex flex-col items-center mt-16 px-[calc(10.416%-24px)] md:p-0" id="slick">
      <h2 className="text-3xl font-bold text-customOffWhite mb-6 text-center">Hear what they say:</h2>
      <div className="drop-shadow-customLg w-full max-w-2xl bg-customLightBlack px-10 pt-5 md:px-4 tab:px-10 md:box-content rounded-lg">
        <Slider
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          speed={1000}
          dots
          centerMode={windowWidth > 768}
          appendDots={(dots) => <Dots dots={dots} currentSlide={currentSlide} />}
          beforeChange={(current, next) => setCurrentSlide(next)}
          className="z-10 py-4"
          slidesToShow={numOfSlides}
          centerPadding="20%"
          autoplay
          autoplaySpeed={4000}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={nanoid()}
              author={testimonial.author}
              headshot={testimonial.headshot}
              title={testimonial.title}
              description={testimonial.description}
              isCurrentSlide={
                index === (currentSlide + testimonials.length) % testimonials.length
              }
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

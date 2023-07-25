import React, { createRef } from 'react';
import Socials from './Socials';
import headShot from '../assets/img/IMG_3525.jpg';
import Testimonials from './Testimonials';

const Headline = () => {
  const headlineParaRef = createRef();
  const headlineText = 'I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.';
  const headlineStyle = {
    // Currently, headlineText is 186 characters. When modified recalculate animations and keyframes
    backgroundSize: `${headlineText.length * 1}ch 200%`,
    animation: `cursor .7s infinite steps(1), typing ${headlineText.length * 0.3}s steps(${headlineText.length}) infinite forwards`,
  };

  return (
    <section className="bg-customBlack bg-no-repeat bg-right-bottom md:bg-right px-6 pt-[20px] pb-[120px]">
      <div className="flex flex-col gap-5 md:flex-row-reverse md:items-center md:px-[calc(10.416%-24px)] md:justify-between">
        <div className="flex justify-center max-w-full">
          <img src={headShot} alt="headshot" className="w-full max-w-xs rounded-2xl border-4 border-customRed" />
        </div>
        <div className="flex flex-col max-w-full">
          <h1 className="font-creteRound w-fit text-customOrange text-[40px]/[4rem] md:text-[72px]/[82px]">
            Hi,
            <span className="block overflow-hidden whitespace-nowrap w-0 animate-typeHeadlineName border-r-4 border-customOrange">
              I&#39;m Emmanuel
            </span>
          </h1>
          <h2 className="max-w-xs w-fit">
            <span className="animate-typeHeadlineTitle border-r-4 whitespace-nowrap border-customMilk w-0 overflow-hidden text-customMilk my-3 text-2xl font-roboto">I am a Software Developer</span>
          </h2>
          <p className="text-white max-w-sm text-xl my-3 font-poppins">
            <span
              ref={headlineParaRef}
              className="border-customOrange"
              id="headlineParagraph"
              style={headlineStyle}
            >
              {headlineText}
            </span>
          </p>
          <Socials className="text-customLightGray flex py-2 gap-4 text-xl" />
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Headline;

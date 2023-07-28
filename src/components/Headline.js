import React, { useEffect } from 'react';
import Socials from './Socials';
import headShot from '../assets/img/IMG_3525.jpg';
import Testimonials from './Testimonials';
import {
  blinking,
  cursor, typeHeadlineName, typeHeadlineTitle, typing,
} from '../helpers/dynamicKeyframes';

const Headline = () => {
  const headlineText = 'I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.';
  const paragraphTime = headlineText.length * 0.2;
  const totalTime = paragraphTime + 25;

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(
      typeHeadlineName(totalTime)
      + typeHeadlineTitle(totalTime)
      + cursor()
      + typing(headlineText.length, totalTime, paragraphTime)
      + blinking(),
    ));
    document.head.appendChild(styleElement);

    return () => {
      // Clean up the style element when the component unmounts
      document.head.removeChild(styleElement);
    };
  });

  return (
    <section className="bg-customBlack bg-no-repeat bg-right-bottom md:bg-right px-6 pt-[20px] pb-[120px]">
      <div className="flex flex-col gap-5 md:flex-row-reverse md:items-center md:px-[calc(10.416%-24px)] md:justify-between">
        <div className="flex justify-center max-w-full">
          <img src={headShot} alt="headshot" className="w-full max-w-xs rounded-2xl border-4 border-customRed" />
        </div>
        <div className="flex flex-col relative max-w-full">
          <div className="relative">
            <h1 className="absolute mb-16 left-0 font-creteRound w-fit text-customOrange text-[40px]/[4rem] md:text-[72px]/[82px]">
              <span>Hi,</span>
              <span
                style={{
                  animation: `typeHeadlineName ${totalTime}s steps(50, end) infinite, blinking 1s infinite`,
                }}
                className="block overflow-hidden whitespace-nowrap w-0 border-r-4 border-customOrange"
              >
                I&#39;m Emmanuel
              </span>
            </h1>
            <div className="absolute top-16 left-0 max-w-xs w-fit">
              <h2
                style={{
                  animation: `typeHeadlineTitle ${totalTime}s steps(50, end) infinite, blinking 1s infinite`,
                }}
                className="border-r-4 whitespace-nowrap border-customMilk w-0 overflow-hidden text-customMilk text-2xl font-roboto"
              >
                I am a Software Developer
              </h2>
            </div>
            <p className="mt-16 text-white md:max-w-sm text-xl my-3 font-poppins">
              <span
                className="font-bold border-customOrange"
                id="headlineParagraph"
                style={{
                  backgroundSize: `${headlineText.length * 1}ch 200%`,
                  animation: `cursor .7s infinite steps(1), typing ${totalTime}s steps(${headlineText.length}) infinite forwards`,
                }}
              >
                {headlineText}
              </span>
            </p>
          </div>
          <Socials className="text-customLightGray flex md:-ml-[6vw] md:mt-32 md:flex-col md:absolute md:top-0 md:left:0 py-2 gap-4 text-xl" />
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Headline;

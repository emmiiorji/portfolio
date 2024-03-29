import React, { useEffect } from 'react';
import Socials from '../socials';
import headShot from '../../assets/img/IMG_3525.jpg';
import Testimonials from '../testimonials';
import {
  blinking,
  cursor, typeHeadlineName, typeHeadlineTitle, typing,
} from '../../helpers/dynamicKeyframes';

const Headline = () => {
  const headlineText = `I implement both front-end aesthetics and back-end functionality, bringing ideas
    to life through codes and giving a unique blend of creativity and technical precision to my projects.`;
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
            <div className="absolute top-0 left-0 h-full w-full bg-transparent z-50" />
            <h1 className="absolute mb-16 left-0 font-creteRound w-fit text-customOrange text-[40px]/[4rem] ssm:text-[50px]/[4rem] md:text-[52px]/[4.5rem] lg:text-[72px]/[82px]">
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
            <div className="absolute top-16 md:top-[80px] lg:top-[82px] left-0 w-fit">
              <h2
                style={{
                  animation: `typeHeadlineTitle ${totalTime}s steps(50, end) infinite, blinking 1s infinite`,
                }}
                className="border-r-4 whitespace-nowrap border-customMilk w-0 overflow-hidden text-customMilk text-2xl md:text-3xl font-roboto"
              >
                I am a Software Developer
              </h2>
            </div>
            <p className="mt-16 md:mt-[80px] lg:mt-[82px] text-white md:max-w-sm lg:max-w-[500px] text-[16px]/6 sm:text-lg/6 md:text-xl my-3 font-poppins">
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
          <Socials className="hidden md:flex text-customLightGray md:-ml-[6vw] md:mt-32 md:flex-col md:absolute md:top-0 md:left:0 py-2 gap-4 text-xl" />
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Headline;

import React from 'react';
import Socials from './Socials';
import headShot from '../assets/img/IMG_3525.jpg';
import Testimonials from './Testimonials';

const Headline = () => (
  <section className="bg-customBlack bg-no-repeat bg-right-bottom md:bg-right px-6 pt-[20px] pb-[120px]">
    <div className="flex flex-col gap-5 md:flex-row-reverse justify-end items-center md:px-[calc(10.416%-24px)] md:justify-between">
      <div className="flex justify-center max-w-full">
        <img src={headShot} alt="headshot" className="w-full max-w-xs rounded-2xl border-4 border-customRed" />
      </div>
      <div>
        <div className="w-fit">
          <h1 className="font-creteRound text-customOrange text-[40px]/[4rem] md:text-[72px]/[82px]">
            Hi,
            <br />
            <span className="block overflow-hidden whitespace-nowrap w-0 animate-typeAndClean border-r-4 border-customOrange">
              I&#39;m Emmanuel
            </span>
          </h1>
        </div>
        <h2 className="text-customMilk my-3 text-2xl ">I am a Software Developer</h2>
        <p className="text-white max-w-sm text-base my-3">
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.
        </p>
        <Socials className="text-customLightGray flex py-2 gap-4 text-xl" />
      </div>
    </div>
    <Testimonials />
  </section>
);

export default Headline;

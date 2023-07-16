import React from 'react';
import Socials from './Socials';

const Headline = () => (
  <section className="bg-customBlack px-6 py-[120px]">
    <div className="">
      <div className="w-fit">
        <h1 className="font-creteRound text-customOrange text-[40px]/[4rem]">
          Hi
          <br />
          <span className="block overflow-hidden whitespace-nowrap w-0 animate-typeAndClean border-r-4 border-customOrange">
            I&#39;m Emmanuel
          </span>
        </h1>
      </div>
      <h2 className="text-customMilk my-3 text-2xl">I am a Software Developer</h2>
      <p className="text-white text-base my-3">
        I can help you build a product, feature or website.
        Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hesitate to contact me.
      </p>
    </div>
    <Socials className="text-customLightGray flex py-2 gap-4 text-xl" />
  </section>
);

export default Headline;

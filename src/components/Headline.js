import React from 'react';
import Socials from './Socials';

const Headline = () => (
  <section className="headline-container">
    <div className="hero">
      <h1>
        <span>Hey There.</span>
        <span>
          I&#39;m Emmanuel
        </span>
      </h1>
      <h2>I am a Software Developer</h2>
      <p>
        I can help you build a product, feature or website.
        Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hesitate to contact me.
      </p>
    </div>
    <Socials />
  </section>
);

export default Headline;

import React from 'react';

const About = () => (
  <section id="about-me" className="text-white">
    <h1>Who is Emmanuel?</h1>
    <p>
      I am a dynamic Software Developer! I can assist you with developing a product, feature, or
      website. View a selection of my projects and experiences! If
      you have a coding project in need of a skilled hand, I eagerly await your contact.
      Together, let&#39;s bring your ideas to life!
    </p>
    <a href="#contact-me" className="button">Reach Out</a>
    <hr />
    <div className="skill-list">
      <div className="languages">
        <div className="title-container">
          <div className="diamond-icon" />
          <h2>Languages</h2>
        </div>
        <ul>
          <li>Javascript</li>
          <li>Ruby</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="frameworks">
        <div className="title-container">
          <div className="square-icon" />
          <h2>Frameworks</h2>
        </div>
        <ul>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>RSPec</li>
          <li>CapyBara</li>
          <li>Express</li>
        </ul>
      </div>
      <div className="technologies">
        <div className="title-container">
          <div className="circle-icon" />
          <h2>Skills</h2>
        </div>
        <ul>
          <li>Codekit</li>
          <li>GitHub</li>
          <li>Codepen</li>
          <li>Gitlab</li>
          <li>Terminal</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;

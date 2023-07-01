import React from 'react';

const Contact = () => (
  <footer id="footer">
    <p>
      I&#39;m always interested in hearing about new projects, 
      so if you&#39;d like to chat please get in touch.
    </p>

    <form action="https://formspree.io/f/xjvleokg" method="POST" id="contact-me">
      <div className="field">
        <input type="text" name="full_name" id="full_name" placeholder="Full Name" maxLength="30" />
      </div>
      <div className="field">
        <input type="email" name="email" placeholder="Email Address" />
      </div>
      <div className="field" >
        <textarea name="textarea" placeholder="Enter text here" maxLength="500" />
      </div>
      <small />
      <small />
      <small />
      <button type="submit">Reach Out</button>

    </form>

    <div className="footer-container">
      <hr id="footer-divide" />
      <ul className="socials">
        <li><a href="https://github.com/emmiiorji"><i className="fab fa-github fa-fw" /></a></li>
        <li><a href="https://www.linkedin.com/in/orji-emmanuel/"><i className="fa-brands fa-linkedin-in" /></a></li>
        <li><a href="https://angel.co/u/emmanuel-orji-ihuoma"><i className="fa-brands fa-angellist" /></a></li>
        <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
        <li><a href="#"><i className="fab fa-medium-m fa-fw" /></a></li>
      </ul>

      <hr id="footer-bottom" />
    </div>
  </footer>
);

export default Contact;

import React from 'react';

const Contact = () => (
  <section id="contact">
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
      <div className="field">
        <textarea name="textarea" placeholder="Enter text here" maxLength="500" />
      </div>
      <small />
      <small />
      <small />
      <button type="submit">Reach Out</button>

    </form>
  </section>
);

export default Contact;

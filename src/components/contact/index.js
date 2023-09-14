/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      message: '',
    },
  });

  const handleFormSubmit = async (data) => {
    const response = await axios.post('https://formspree.io/f/xjvleokg', data);
    if (response.status === 200) {
      // Handle success
    }
    // Handle error
  };
  const validFullName = /^[a-z][a-z0-9\s-]+$/gi;
  const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return (
    <section id="contact">
      <p>
        I&#39;m always interested in hearing about new projects. Please get in touch.
      </p>

      <form id="contact-me" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="field">
          <input
            type="text"
            id="full_name"
            placeholder="Full Name"
            {...register('fullName', {
              required: 'Please, enter your full name',
              pattern: {
                value: validFullName,
                message: 'Name must start with a letter, no special characters are allowed',
              },
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters',
              },
              maxLength: {
                value: 30,
                message: 'Name must be at most 30 characters',
              },
            })}
          />
          <small className="show-error">{errors.fullName?.message}</small>
        </div>
        <div className="field">
          <input
            {...register('email', {
              required: 'Please, enter your email',
              pattern: {
                value: validEmail,
                message: 'Please, enter a valid email',
              },
            })}
            placeholder="Email Address"
          />
          <small className="show-error">{errors.email?.message}</small>
        </div>
        <div className="field">
          <textarea
            placeholder="Enter your message here"
            {...register('message', {
              required: 'Please, enter a message',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
              maxLength: {
                value: 500,
                message: 'Message must be at most 500 characters',
              },
            })}
          />
          <small className="show-error">{errors.message?.message}</small>
        </div>
        <button type="submit" className="button">Reach Out</button>

      </form>
    </section>
  );
};

export default Contact;

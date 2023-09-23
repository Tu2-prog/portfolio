import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// appreciation goes to: https://www.emailjs.com/docs/examples/reactjs/ (last access: September 14, 2023 at 5:34 pm.)

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-container'>
    <form ref={form} onSubmit={sendEmail}>
      <div className='form-group'>
      <label>Name</label>
      <input type="text" name="user_name" />
      </div>
      <div className='form-group'>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      <div className='form-group'>
      <label>Message</label>
      <textarea name="message" />
      </div>
      <div className='form-group'>
      <button type='submit'>Send</button>
      </div>
    </form>
    </div>
  );
};

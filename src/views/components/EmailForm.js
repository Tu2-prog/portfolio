import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from "../../data/email_data.js"

// appreciation goes to: https://www.emailjs.com/docs/examples/reactjs/ (last access: September 14, 2023 at 5:34 pm.)

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
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

import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export const Contact = () => {
  const { dp } = useContext(GlobalContext);

  return (
    <div className='two-grid contact-container'>
      <div className='grid-box info-container text-center'>
        <h1>Contact me</h1>

        <div>
          <p>
            Thank you again for your interest. Get in touch if you want to know
            more about me. Cheers!
          </p>
          <div className='contact-details'>
            <p>
              <i className='fas fa-phone highlight-green'></i>
              <a href='tel:0211775895' className='contact-link'>
                0211775895
              </a>
            </p>
            <p>
              <i className='fas fa-envelope highlight-green'></i>
              <a href='mailto:lattrellsapon@gmail.com' className='contact-link'>
                lattrellsapon@gmail.com
              </a>
            </p>
            <div className='icon-container'>
              <a
                href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
                className='highlight-green'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin link-linkedin'></i>
              </a>
              <a
                href='https://github.com/lattrellsapon'
                className='highlight-green'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github-square link-github'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='grid-box form-box'>
        <form className='form-container'>
          <label htmlFor='name'>Full Name</label>
          <input type='text' className='input-field' />
          <label htmlFor='email'>Email</label>
          <input type='email' className='input-field' />
          <label htmlFor='message'>Message</label>
          <textarea name='message' className='message-field'></textarea>
          <input type='submit' value='SEND' className='send-button' />
        </form>
      </div>
    </div>
  );
};

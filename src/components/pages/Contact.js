import React from 'react';

export const Contact = () => {
  return (
    <div className='two-grid contact-container'>
      <div className='grid-box info-container text-center'>
        <h1>Contact me</h1>
        <div>
          <p>
            Thank you again for your interest. Get in touch if you want to know
            more about me. Cheers!
          </p>
          <p className='highlight-green'>
            <i class='fas fa-phone'></i>
            <a href='tel:0211775895' className='contact-link'>
              0211775895
            </a>
          </p>
          <p className='highlight-green'>
            <i class='fas fa-envelope'></i>
            <a href='mailto:lattrellsapon@gmail.com' className='contact-link'>
              lattrellsapon@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className='grid-box'>
        <form>
          <label htmlFor='name'>Full Name</label>
          <input type='text' />
          <label htmlFor='email'>Email</label>
          <input type='email' />
          <label htmlFor='message'>Message</label>
          <textarea name='message'></textarea>
        </form>
      </div>
    </div>
  );
};

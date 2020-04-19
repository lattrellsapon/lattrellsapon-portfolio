import React, { useState, useContext } from 'react';

import { EmailSucces } from '../alerts/EmailSucces';
import { EmailError } from '../alerts/EmailError';

import { GlobalContext } from '../../context/GlobalState';

export const Contact = () => {
  const { dp, messageSent, messageError } = useContext(GlobalContext);
  let { isEmailSent } = useContext(GlobalContext);

  const [userfullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    console.log('Hello');
    const templateId = 'template_lcAf46LY';

    sendFeedback(templateId, {
      message_html: userMessage,
      from_name: userfullName,
      reply_to: userEmail,
      to_name: 'Lattrell',
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        if (res.status === 200) {
          setUserEmail('');
          setUserFullName('');
          setUserMessage('');
          messageSent('sent');
        } else {
          messageError('error');
        }
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  return (
    <div className='two-grid contact-container'>
      <div className='grid-box  text-center'>
        <div className='info-container'>
          <h1>Contact me</h1>
          <div>
            <p>
              Thank you again for your interest. Get in touch if you want to
              know more about me. Cheers!
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
                <a
                  href='mailto:lattrellsapon@gmail.com'
                  className='contact-link'
                >
                  lattrellsapon@gmail.com
                </a>
              </p>
              <div className='icon-container'>
                <a
                  href='https://www.youtube.com/channel/UC6I_M1lFqU3KQORAzW0VTCw?view_as=subscriber'
                  className='highlight-green'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fab fa-youtube link-youtube'></i>
                </a>
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
      </div>
      <div className='grid-box form-box'>
        <form className='form-container' onSubmit={handleForm}>
          <label htmlFor='name'>Full Name</label>
          <input
            required
            type='text'
            className='input-field'
            value={userfullName}
            onChange={(e) => {
              setUserFullName(e.target.value);
            }}
          />
          <label htmlFor='email'>Email</label>
          <input
            required
            type='email'
            className='input-field'
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <label htmlFor='message'>Message</label>
          <textarea
            required
            name='message'
            className='message-field'
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          ></textarea>
          <input type='submit' value='SEND' className='send-button' />
        </form>
        <div>{isEmailSent === 'sent' ? <EmailSucces /> : ''}</div>
        <div>{isEmailSent === 'error' ? <EmailError /> : ''}</div>
      </div>
    </div>
  );
};

import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div>
          <h3>&copy; Lattrell Sapon</h3>
        </div>
        <div className='links-container'>
          <a href='tel:0211775895'>
            <i className='fas fa-phone highlight-green link-footer'></i>
          </a>
          <a href='mailto:lattrellsapon@gmail.com'>
            <i className='fas fa-envelope highlight-green link-footer'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin highlight-green link-footer'></i>
          </a>
          <a
            href='https://github.com/lattrellsapon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github-square highlight-green link-footer'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

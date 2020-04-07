import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='nav-box home-box'>
        <h2>Lattrell's porfolio</h2>
      </div>
      <div className='nav-box'>
        <ul>
          <li>
            <Link to='/' className='links'>
              HOME
            </Link>
          </li>
          <li>
            <Link to='/career' className='links'>
              CAREER
            </Link>
          </li>
          <li>
            <Link to='/projects' className='links'>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to='/skills' className='links'>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to='/contact' className='links'>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

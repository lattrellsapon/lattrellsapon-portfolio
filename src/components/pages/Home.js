import React, { useContext } from 'react';
import showcase from '../../videos/showcase.mp4';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

export const Home = () => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <div className='home-content'>
      <video src={showcase} className='showcase' loop autoPlay muted></video>
      <div className='about-me'>
        <section>
          <p>
            Hi <span className='highlight-green'>{currentUser}</span>,
          </p>
        </section>
        <section>
          <p> Welcome and thank you for visiting my portfolio.</p>{' '}
          <p>
            {' '}
            My name is <span className='highlight-green'>
              Lattrell Sapon
            </span>{' '}
            and I am a{' '}
            <Link to='/career' className='highlight-green'>
              Software Developer
            </Link>{' '}
            graduate from Auckland Unitversity Of Technology (AUT). I have a
            burning passion in web development. As you will see in this
            portfolio, I have hands-on experience efficiently coding websites
            and applications using modern HTML, CSS, and Javascript. I enjoy
            building websites that are user-friendly and have a modern design.
          </p>
          <p>
            Feel free to browse the rest of my portfolio to learn more about me.
            Happy browsing!
          </p>
        </section>
        <section>
          <p>Kind Regards,</p>
          <p>Lattrell Sapon</p>
        </section>
      </div>
    </div>
  );
};

import React, { useContext } from 'react';
import showcase from '../../videos/showcase.mp4';

import { GlobalContext } from '../../context/GlobalState';

export const Home = () => {
  const { currentUser } = useContext(GlobalContext);

  return (
    <div className='home-content'>
      <video src={showcase} className='showcase' loop autoPlay></video>
      <div className='about-me'>
        <section>
          <p>Hi {currentUser},</p>
        </section>
        <section>
          <p> Welcome and thank you for visiting my portfolio.</p>{' '}
          <p>
            {' '}
            My name is Lattrell Sapon and I am a Software Development graduate
            from Auckland Unitversity Of Technology (AUT). I am a dedicated and
            results-oriented worker with experience in Customer Service
            Engineering and IT support. Key strengths lie in teamwork,
            troubleshooting, communication and adaptability skills. Works
            effectively in team environments, and takes initiative in improving
            current work processes or methods. Attentive to details and
            proficient in documentation. An eager learner who also demonstrates
            a reliable work ethic.
          </p>
          <p>
            Feel free to browse the rest of my portfolio to learn more about me!
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

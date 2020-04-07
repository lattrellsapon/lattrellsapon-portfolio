import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { useSpring, animated } from 'react-spring';

import { Home } from './Home';

export const LandingPage = () => {
  const [userName, setUserName] = useState('');

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const { isLandingPageClose, closeLandingPage, updateUserName } = useContext(
    GlobalContext
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const currentuser = userName;
    updateUserName(currentuser);
    const isClosed = true;
    closeLandingPage(isClosed);
  };

  const closeThisPage = () => {
    const isClosed = true;
    closeLandingPage(isClosed);
  };

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { delay: 5000, duration: 3000 },
  });

  if (!isLandingPageClose) {
    return (
      <div className='landing-page'>
        <animated.div className='landing-container text-center' style={props}>
          <h1>Welcome</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Let's get to know each other.</label>
            <br />
            <input
              type='text'
              value={userName}
              onChange={onChange}
              placeholder='Enter name here . . .'
              className='user-name'
            />
            <br />
            <input
              type='submit'
              value='Okay,sure. Why not.'
              className='submit-button'
            />
            <button onClick={closeThisPage} className='close-button'>
              No, thanks. Maybe next time.
            </button>
          </form>
        </animated.div>
      </div>
    );
  } else {
    return <Home />;
  }
};

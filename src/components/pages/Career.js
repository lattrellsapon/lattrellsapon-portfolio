import React from 'react';
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';

export const Career = () => {
  return (
    <div className='career-container'>
      <WorkExperience />
      <Education />
    </div>
  );
};

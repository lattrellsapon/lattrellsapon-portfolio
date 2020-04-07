import React, { useContext } from 'react';

import { ExperienceItem } from './ExperienceItem';

import { GlobalContext } from '../../context/GlobalState';

export const WorkExperience = () => {
  const { workExperience } = useContext(GlobalContext);


  return (
    <div className='work-experience-container'>
      <h1>Work Experience</h1>
      {workExperience.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

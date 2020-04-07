import React from 'react';

export const ExperienceItem = ({ experience }) => {
  return (
    <div className='experience-container'>
      <div className='experience-header'>
        <h3 className='highlight-green'>
          {experience.role} at {experience.companyName}
        </h3>
        <h3>{experience.tenure}</h3>
      </div>
      <div className='experience-description'>
        <p>{experience.roleDescription}</p>
      </div>
    </div>
  );
};

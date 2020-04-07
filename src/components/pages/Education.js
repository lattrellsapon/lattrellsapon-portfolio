import React, { useContext } from 'react';

import { EducationItem } from './EducationItem';

import { GlobalContext } from '../../context/GlobalState';

export const Education = () => {
  const { education } = useContext(GlobalContext);

  return (
    <div className='education-container'>
      <h1>Education</h1>
      {education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
      ))}
    </div>
  );
};

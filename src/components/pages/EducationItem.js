import React from 'react';

export const EducationItem = ({ educationItem }) => {
  return (
    <div className='education-item-container'>
      <div className='education-header'>
        <h3 className='highlight-green'>{educationItem.school}</h3>
      </div>
      <div className='education-body'>
        <p>
          {educationItem.accomplishment} - ({educationItem.tenure})
        </p>

        {educationItem.transcript !== '' ? (
          <a
            href={educationItem.transcript}
            className='highlight-green'
            target='_blank'
            rel='noopener noreferrer'
          >
            Download Transcript
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

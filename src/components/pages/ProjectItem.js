import React from 'react';

export const ProjectItem = ({ project }) => {
  return (
    <div classname='project-container'>
      <div className='project-header text-center'>
        <h3>
          <a
            href={project.projectLink}
            className='highlight-green'
            target='_blank'
            rel='noopener noreferrer'
          >
            {project.projectName}
          </a>
        </h3>
      </div>
      <div className='project-body'>
        <img src={project.projectImage} alt='' />
      </div>
    </div>
  );
};

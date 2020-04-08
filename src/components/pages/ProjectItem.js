import React from 'react';

export const ProjectItem = ({ project }) => {
  return (
    <div project-container>
      <div className='project-header text-center'>
        <h3>
          <a
            href={project.projectLink}
            className='highlight-green'
            target='_blank'
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

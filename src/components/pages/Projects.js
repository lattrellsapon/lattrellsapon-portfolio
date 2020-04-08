import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const { projects } = useContext(GlobalContext);

  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <p>Here are my latest projects that has been keeping me busy. </p>
      <div className='three-grid'>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

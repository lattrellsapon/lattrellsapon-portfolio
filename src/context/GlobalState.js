import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import rosaryapp from '../images/RosaryApp.png';
import portfoliophotography from '../images/Photography.png';
import dategenerator from '../images/DateGenerator.png';
import budgetmanager from '../images/BudgetManager.png';

import auttranscript from '../transcript/auttranscript.pdf';

// Initial State
const initialState = {
  currentUser: '',
  isLandingPageClose: false,
  workExperience: [
    {
      id: 1,
      role: 'Customer Service Engineer',
      companyName: 'Asnet Technologies',
      roleDescription:
        'Adaptable: Able to remain flexible amidst changes and uncertainty. Willing to adopt new methods to improve current processes. Proactive in identifying system weaknesses and offering solutions to fix them. ',
      tenure: 'September 2019 - Present',
    },
    {
      id: 2,
      role: 'Contractor',
      companyName: 'WDHB North Shore',
      roleDescription:
        'daptable: Able to remain flexible amidst changes and uncertainty. Willing to adopt new methods to improve current processes. Proactive in identifying system weaknesses and offering solutions to fix them. ',
      tenure: 'November 2018 - September 2019',
    },
    {
      id: 3,
      role: 'IT Support Technician',
      companyName: 'Recreational Services',
      roleDescription:
        'Adaptable: Able to remain flexible amidst changes and uncertainty. Willing to adopt new methods to improve current processes. Proactive in identifying system weaknesses and offering solutions to fix them. ',
      tenure: 'August 2018 - November 2018',
    },
  ],
  education: [
    {
      id: 1,
      accomplishment:
        'Bachelor of Computer Science, major in Software Development',
      school: 'Auckland University of Technology',
      tenure: '2015 - 2018',
      transcript: auttranscript,
    },
    {
      id: 2,
      accomplishment: 'High School Graduate',
      school: 'Glenfield College',
      tenure: '2009 - 2014',
      transcript: '',
    },
  ],
  projects: [
    {
      id: 0,
      projectName: 'Rosary Application',
      projectLink: 'https://elastic-edison-407014.netlify.com/',
      projectImage: rosaryapp,
    },
    {
      id: 1,
      projectName: 'Portfolio Photography',
      projectLink: 'https://youthful-goldberg-54a29a.netlify.com/',
      projectImage: portfoliophotography,
    },
    {
      id: 2,
      projectName: 'Budget Manager',
      projectLink: 'https://stupefied-curie-c68dad.netlify.com/',
      projectImage: budgetmanager,
    },
    {
      id: 3,
      projectName: 'Date Generator',
      projectLink: 'https://goofy-borg-191ede.netlify.com/',
      projectImage: dategenerator,
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function updateUserName(name) {
    dispatch({
      type: 'UPDATE_USER',
      payload: name,
    });
  }

  function closeLandingPage(isClosed) {
    dispatch({
      type: 'CLOSE_LANDINGPAGE',
      payload: isClosed,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        currentUser: state.currentUser,
        isLandingPageClose: state.isLandingPageClose,
        workExperience: state.workExperience,
        education: state.education,
        projects: state.projects,
        closeLandingPage,
        updateUserName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import rosaryapp from '../images/RosaryApp.png';
import portfoliophotography from '../images/Photography.png';
import dategenerator from '../images/DateGenerator.png';
import budgetmanager from '../images/BudgetManager.png';
import dp from '../images/dp.jpg';

import auttranscript from '../transcript/auttranscript.pdf';

// Initial State
const initialState = {
  dp: dp,
  currentUser: '',
  isLandingPageClose: false,
  workExperience: [
    {
      id: 1,
      role: 'Customer Service Engineer',
      companyName: 'Asnet Technologies',
      roleDescription:
        "First point of contact to provide support for customer's audio and visual queries or incident via phone call or email. Given my software development background, I am currently mastering our ticketing system and receiving training to improve its functionality. Moreover, I am also the website administrator for our website. Lastly, I produce high quality documentations for my team to use.",
      tenure: 'September 2019 - Present',
    },
    {
      id: 2,
      role: 'Contractor',
      companyName: 'WDHB North Shore',
      roleDescription:
        'Successfully built and implemented five databases using Microsoft Access for the Clinical and Coding department. Created documentations that clearly explained the instructions for the databases. Backend used: VBA and SQL.',
      tenure: 'November 2018 - September 2019',
    },
    {
      id: 3,
      role: 'IT Support Technician',
      companyName: 'Recreational Services',
      roleDescription:
        'Resolved technical issues via phone or email, at the client’s preference. Attentively set up network servers, ensuring that all cables, switches, routers and modems were properly connected. •	Overlooked the company’s domain network.',
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
  isEmailSent: '',
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

  function messageSent(isEmailSent) {
    dispatch({
      type: 'MESSAGE_SENT',
      payload: isEmailSent,
    });
  }

  function messageError(isEmailSent) {
    dispatch({
      type: 'MESSAGE_ERROR',
      payload: isEmailSent,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        dp: state.dp,
        currentUser: state.currentUser,
        isLandingPageClose: state.isLandingPageClose,
        workExperience: state.workExperience,
        education: state.education,
        projects: state.projects,
        isEmailSent: state.isEmailSent,
        closeLandingPage,
        updateUserName,
        messageSent,
        messageError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React from 'react';

export const Skills = () => {
  return (
    <div className='skills-container'>
      <h1>Technical Skills</h1>
      <div className='flex-container'>
        <div className='technical-skills-container'>
          <h3 className='highlight-green'>Frontend Skills</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className='technical-skills-container'>
          <h3 className='highlight-green'>Backend Skills</h3>
          <ul>
            <li>NodeJs (Express)</li>
            <li>MySQL</li>
            <li>Microsoft Access 2010</li>
            <li>PHP</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='technical-skills-container'>
          <h3 className='highlight-green'>Source Control</h3>
          <ul>
            <li>Github</li>
            <li>Gitlab</li>
          </ul>
        </div>
        <div className='technical-skills-container'>
          <h3 className='highlight-green'>Methodologies</h3>
          <ul>
            <li>Agile</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
      <h1>Core Competencies</h1>
      <div className='flex-container'>
        <div className='flex-box'>
          <h3 className='highlight-green'>Teamwork</h3>
          <p>
            Proven ability to work collaboratively with other colleagues to
            produce the most value for our clients.{' '}
          </p>
        </div>
        <div className='flex-box'>
          <h3 className='highlight-green'>Customer Service</h3>
          <p>
            Outstanding verbal and interpersonal skills shown by easily building
            rapport with clients and co-workers, over the phone or in person.
            Highly effective in explaining technological concepts to a
            non-technical audience, thus assisting customers in troubleshooting.{' '}
          </p>
        </div>
        <div className='flex-box'>
          <h3 className='highlight-green'>Adaptable</h3>
          <p>
            Able to remain flexible amidst changes and uncertainty. Willing to
            adopt new methods to improve current processes. Proactive in
            identifying system weaknesses and offering solutions to fix them.
          </p>
        </div>
        <div className='flex-box'>
          <h3 className='highlight-green'>Attentive to detail</h3>
          <p>
            Produces accurate and thorough reports and documentation to ensure
            that stakeholders clearly understand the intended messages.
          </p>
        </div>
      </div>
    </div>
  );
};

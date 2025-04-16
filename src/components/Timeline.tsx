import React, { useMemo } from 'react';

const Timeline: React.FC = () => {
  const events = useMemo(() => [
    { date: '7/12/24', title: 'Start!', description: 'Techfluences officially started and we began planning what we want to do!' },
    { date: '7/15/24', title: 'Blog & Website Start', description: 'We began our weekly blogs and created our (old) website' },
    { date: '8/2/24', title: 'Project Spotlight Program', description: 'Created our Project Spotlight Program to showcase the work of young coders' },
    { date: '8/23/24', title: 'Tech Trivia Night', description: 'Collaborated with ScriptCrew to host Tech Trivia Night Event' },
    { date: '8/25/24', title: '501(c)(3) Nonprofit', description: 'Became a 501(c)(3) nonprofit organization under Hackclub HCB' },
    { date: '9/25/24', title: 'New updated website launched!', description: 'Launched our new website - coded by our team!' },
    { date: '12/15/24', title: 'Partnership With CodeCrafters', description: 'Help teach kids how to make their own projects through CodeCrafters\' guides & courses' },
    { date: '4/26/25', title: 'Power 2 Plan Youth Entrepreneurship Fair', description: 'Hosted a booth at the Power 2 Plan Youth Entrepreneurship Fair, sellig stickers and showcasing demos of projects' },
  
], []);

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div className="timeline">
          {events.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 
import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const ScheduledEvent = ({ eventName, coachName, datetime }) => (
  <div className="scheduled-event">
    <div className="datetime">
      <h3 className="time">630am</h3>
      <h4 className="day">Mon</h4>
    </div>

    <div className="content">
      <h2 className="event-name">{eventName}</h2>
      <div className="coach-name">Coach {coachName}</div>
    </div>
  </div>
);

ScheduledEvent.propTypes = {
  eventName: propTypes.string.isRequired,
  coachName: propTypes.string.isRequired,
  datetime: propTypes.number.isRequired
};

export default ScheduledEvent;

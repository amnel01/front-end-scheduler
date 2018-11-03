import React from 'react';
import propTypes from 'prop-types';

import './style.css';
import Card from '../common/Card';
import DateHelpers from '../../helpers/date';

const ScheduledEvent = ({ eventName, coachName, datetime }) => (
  <Card className="scheduled-event">
    <div className="datetime">
      <h3 className="day">{DateHelpers.formatDay(datetime)}</h3>
      <h3 className="time">{DateHelpers.formatTime(datetime)}</h3>
    </div>

    <div className="content">
      <h2 className="event-name">{eventName}</h2>
      <div className="coach-name">Coach {coachName}</div>
    </div>
  </Card>
);

ScheduledEvent.propTypes = {
  eventName: propTypes.string.isRequired,
  coachName: propTypes.string.isRequired,
  datetime: propTypes.number.isRequired
};

export default ScheduledEvent;

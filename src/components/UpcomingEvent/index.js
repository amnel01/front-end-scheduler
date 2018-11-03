import React from 'react';
import propTypes from 'prop-types';

import './style.css';

const UpcomingEvent = ({ eventName, coachName, datetime }) => (
    <div className="upcoming-event">
        <div className="content">
            <h1 className="datetime" className="time">330am</h1>
            <div className="event-name">{eventName}</div>
            <div className="coach-name">{coachName}</div>
        </div>
    </div>
)

UpcomingEvent.propTypes = {
    eventName: propTypes.string.isRequired,
    coachName: propTypes.string.isRequired,
    datetime: propTypes.number.isRequired
};

export default UpcomingEvent;
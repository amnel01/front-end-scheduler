import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import '../../index.css';

import UpcomingEvent from '.';

storiesOf('UpcomingEvent', module)
    .addDecorator(withKnobs)

    .addDecorator(story => (
        <div style={{ padding: 16, width: 500, height: 100 }}>{story()}</div>
    ))

    .add('single', () => (
        <UpcomingEvent
            eventName={text('Event Name', 'This is a really long event name')}
            coachName={text('Coach', 'Andy Copandy')}
            datetime={number('DateTime', new Date().getTime())}
        />
    ));
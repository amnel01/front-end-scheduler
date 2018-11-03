import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import '../../index.css';

import ScheduledEvent from '.';
import ScheduledEventList from '../ScheduledEventList';

const now = new Date();

storiesOf('ScheduledEvent', module)
  .addDecorator(withKnobs)

  .addDecorator(story => (
    <div style={{ padding: 16, width: 500, height: 500 }}>{story()}</div>
  ))

  .add('default', () => (
    <ScheduledEvent
      eventName={text('Event Name', 'This is a really long event name')}
      coachName={text('Coach', 'Andy Copandy')}
      datetime={number('DateTime', now.getTime())}
    />
  ))

  .add('list', () => (
    <ScheduledEventList>
      <ScheduledEvent
        eventName="H.Y.P.E"
        coachName="Brit"
        datetime={1541284998014}
      />

      <ScheduledEvent
        eventName="Pain"
        coachName="Cody"
        datetime={15414998014}
      />

      <ScheduledEvent
        eventName="Suffering"
        coachName="Grant"
        datetime={154198014}
      />

      <ScheduledEvent
        eventName="Hard Gains"
        coachName="Brittney"
        datetime={15414994}
      />

      <ScheduledEvent eventName="Failure" coachName="Dax" datetime={154994} />
    </ScheduledEventList>
  ));

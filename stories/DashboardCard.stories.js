import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// target
import DashboardCard from '../src/DashboardCard';
import './../src/assets/main.css';

storiesOf('DashboardCard', module)
  .addDecorator(withKnobs)
  .add('Full Example', () => (
    <DashboardCard
      title={text('Title', 'title')}
      subtitle={text('Subtile', 'example')}
      actions={text('Actions', 'action')}
      bodyClassName={text('BodyClassName', '')}
      footer={text('Footer', 'footer')}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DashboardCard>
  ))
  .add('with titles', () => (
    <DashboardCard
      title={text('Title', 'title')}
      subtitle={text('Subtile', 'example')}
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DashboardCard>
  ));

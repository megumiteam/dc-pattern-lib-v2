import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
// import DashboardCard from '../src/DashboardCard';
import DashboardCard from '../src/components/dashboard-card';
import '../src/assets/main.css';

storiesOf('DashboardCard', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Full Example', () => (
    <DashboardCard
      title={text('Title', 'title')}
      subtitle={text('Subtile', 'example')}
      actions={text('Actions', 'action')}
      bodyClassName={text('BodyClassName', '')}
      footer={text('Footer', 'footer')}
      headerClassName="text-green"
    >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DashboardCard>
  ))
  .add('with titles', () => (
    <div className="shifter-ui">
      <DashboardCard
        className="card-hover"
        title={text('Title', 'title')}
        subtitle={text('Subtile', 'example')}
      >
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </DashboardCard>
    </div>
  ))
  .add('without titles', () => (
    <div className="shifter-ui">
      <DashboardCard>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </DashboardCard>
    </div>
  ))
  .add('Borderless', () => (
    <DashboardCard borderless title={text('Title', 'title')} subtitle={text('Subtile', 'example')}>
      <span role="img" aria-label="so cool">
        Add
        {' '}
        <code>borderless</code>
        {' '}
        to DashboardCard to disable padding and add overflow css.
      </span>
    </DashboardCard>
  ));

import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
import DashboardCardLoader from '../src/DashboardCardLoader';
import '../src/assets/main.css';

storiesOf('DashboardCardLoader', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Default / Card', () => (
    <DashboardCardLoader />
  ))
  .add('Site', () => (
    <div className="card-columns">
      <DashboardCardLoader cardStyle="site" />
      <DashboardCardLoader cardStyle="site" />
      <DashboardCardLoader cardStyle="site" />
    </div>
  ));

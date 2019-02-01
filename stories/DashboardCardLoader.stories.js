import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// target
import DashboardCardLoader from '../src/DashboardCardLoader';
import './../src/assets/main.css';

storiesOf('DashboardCardLoader', module)
  .addDecorator(withKnobs)
  .add('Full Example', () => (
    <DashboardCardLoader>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DashboardCardLoader>
  ))

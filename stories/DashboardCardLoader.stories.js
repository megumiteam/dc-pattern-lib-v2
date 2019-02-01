import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
import DashboardCardLoader from '../src/DashboardCardLoader';
import './../src/assets/main.css';

storiesOf('DashboardCardLoader', module)
  .addDecorator(withKnobs)
  .addDecorator(
    withInfo
  )
  .add('Full Example', () => (
    <DashboardCardLoader>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </DashboardCardLoader>
  ))

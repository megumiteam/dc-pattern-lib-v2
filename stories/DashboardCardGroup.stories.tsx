import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
import DashboardCard from '../src/DashboardCard';
import DashboardCardGroup from '../src/DashboardCardGroup';
import '../src/assets/main.css';

storiesOf('DashboardCardGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Basic usage', () => (
    <DashboardCardGroup>
      <DashboardCard>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </DashboardCard>
      <DashboardCard>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </DashboardCard>
    </DashboardCardGroup>
  ))
  .add('Full Example', () => {
    const length = number(
      'Card items',
      4,
      {
        range: true,
        min: 0,
        max: 10,
        step: 1,
      },
      'GROUP-ID1',
    );
    const children = [];
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let index = 0; index < length; index++) {
      children.push(
        <DashboardCard key={index}>
          <span role="img" aria-label="so cool">
            😀 😎 👍 💯
          </span>
        </DashboardCard>,
      );
    }
    return (
      <div>
        <DashboardCardGroup>{children}</DashboardCardGroup>
        <DashboardCardGroup>{children}</DashboardCardGroup>
      </div>
    );
  });

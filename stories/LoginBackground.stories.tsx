import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
import LoginBackground from '../src/LoginBackground';
import '../src/assets/main.css';

storiesOf('LoginBackground', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Default', () => <LoginBackground />);

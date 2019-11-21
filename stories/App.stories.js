import React from 'react';
import { storiesOf } from '@storybook/react';
import AppDimmer from '../src/AppDimmer';

// target
import '../src/assets/main.css';

storiesOf('App', module).add('Dimmer', () => <AppDimmer isOpen />);

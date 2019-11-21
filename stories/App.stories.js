import React from 'react';
import { storiesOf } from '@storybook/react';
import AppDimmer from '../src/AppDimmer';

storiesOf('App', module).add('Dimmer', () => <AppDimmer isOpen />);

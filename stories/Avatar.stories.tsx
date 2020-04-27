import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../src/components/avatar';

// target
import '../src/assets/main.css';

storiesOf('Avatar', module).add('Styles', () => <Avatar email="hello@getshifter.io" />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../src/components/avatar';

// target
import '../src/assets/main.css';

storiesOf('Avatar', module).add('Fallback', () => <Avatar />);

storiesOf('Avatar', module).add('User Email', () => <Avatar email="emaildano@gmail.com" />);

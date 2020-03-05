import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import '../src/assets/main.css';

storiesOf('Generating Text', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Basic usage', () => (
    <div className="generating-text">
      <span>G</span>
      <span>e</span>
      <span>n</span>
      <span>e</span>
      <span>r</span>
      <span>a</span>
      <span>t</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </div>
  ));

import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Input, Label } from 'reactstrap';
import '../src/assets/main.css';

storiesOf('Switch', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Deactivated', () => (
    <span className="switch" data-active="false">
      <Input
        id="switch-mfaSelector-0f49165e-527e-43df-a967-eb60435fdfeb"
        disabled=""
        type="checkbox"
        className="switch form-check-input"
      />
      <Label
        for="switch-mfaSelector-0f49165e-527e-43df-a967-eb60435fdfeb"
        className="form-check-label"
      />
    </span>
  ));

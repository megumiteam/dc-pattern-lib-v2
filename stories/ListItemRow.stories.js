import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// target
import ListItemRow from '../src/ListItemRow';
import '../src/assets/main.css';

storiesOf('ListItemRow', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Full Example', () => (
    <Router>
      <ListItemRow target="/">
        <tr>
          <td>
            <h1>Hello</h1>
          </td>
          <td>
            <p className="text-muted">
              <b>Owner</b>
            </p>
            <p>digitalcube</p>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Hello</h1>
          </td>
          <td>
            <p className="text-muted">
              <b>Owner</b>
            </p>
            <p>shifter</p>
          </td>
        </tr>
      </ListItemRow>
    </Router>
  ))
  .add('no link', () => (
    <Router>
      <ListItemRow>
        <tr>
          <td>
            <h1>Hello</h1>
          </td>
          <td>
            <p className="text-muted">
              <b>Owner</b>
            </p>
            <p>digitalcube</p>
          </td>
        </tr>
        <tr>
          <td>
            <h1>Hello</h1>
          </td>
          <td>
            <p className="text-muted">
              <b>Owner</b>
            </p>
            <p>shifter</p>
          </td>
        </tr>
      </ListItemRow>
    </Router>
  ));

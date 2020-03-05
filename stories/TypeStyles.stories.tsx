import React from 'react';
import { Table } from 'reactstrap';

import { storiesOf } from '@storybook/react';

// target
import '../src/assets/main.css';

storiesOf('Type Styles', module).add('Styles', () => (
  <Table className="shifter-ui">
    <thead>
      <tr>
        <td>Headers</td>
        <td>Body</td>
        <td>Captions</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <h1>Header 1</h1>
        </td>
        <td>
          <p>This is what body text looks like.</p>
        </td>
        <td>
          <p>This is what a caption looks like.</p>
        </td>
      </tr>
      <tr>
        <td>
          <h2>Header 2</h2>
        </td>
      </tr>
      <tr>
        <td>
          <h3>Heading 3</h3>
        </td>
      </tr>
      <tr>
        <td>
          <h4>Heading 4</h4>
        </td>
      </tr>
    </tbody>
  </Table>
));

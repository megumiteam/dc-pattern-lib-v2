import React from 'react';
import { Table, Badge } from 'reactstrap';
import { storiesOf } from '@storybook/react';

// target
import '../src/assets/main.css';

storiesOf('Badges', module).add('Styles', () => (
  <Table className="shifter-ui">
    <thead>
      <tr>
        <td>Primary</td>
        <td>Secondary</td>
        <td>Success</td>
        <td>Error</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Badge color="primary">Level 1</Badge>
        </td>
        <td>
          <Badge color="secondary">Level 2</Badge>
        </td>
        <td>
          <Badge color="success">Level 3</Badge>
        </td>
        <td>
          <Badge color="danger">Level 4</Badge>
        </td>
      </tr>
    </tbody>
  </Table>
));

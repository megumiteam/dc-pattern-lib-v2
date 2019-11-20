import React from 'react';
import { Table } from 'reactstrap';
import { storiesOf } from '@storybook/react';
import DashboardAlert from '../src/DashboardAlert';

// target
import '../src/assets/main.css';

storiesOf('Dashboard Alerts', module).add('Styles', () => (
  <Table className="shifter-ui">
    <thead>
      <tr>
        <td>Info</td>
        <td>Success</td>
        <td>Warning</td>
        <td>Error</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <DashboardAlert type="info">Primary Messages </DashboardAlert>
        </td>
        <td>
          <DashboardAlert type="success">Successful action</DashboardAlert>
        </td>
        <td>
          <DashboardAlert type="warning">Something's missing</DashboardAlert>
        </td>
        <td>
          <DashboardAlert type="error">Something's wrong</DashboardAlert>
        </td>
      </tr>
    </tbody>
  </Table>
));

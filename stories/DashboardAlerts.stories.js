import React from 'react';
import { Table } from 'reactstrap';
import { storiesOf } from '@storybook/react';
import DashboardAlert from '../src/DashboardAlert';

// target
import '../src/assets/main.css';

storiesOf('Dashboard Alerts', module).add('Styles', () => (
  <Table className="shifter-ui">
    <tbody>
      <tr>
        <td>
          <DashboardAlert type="info">Use for general messages</DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="success">Use for successful operations</DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="warning">Use for important alerts</DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="error">Use for API errors or user errors</DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="danger">Warn users of the dangers of their action</DashboardAlert>
        </td>
      </tr>
    </tbody>
  </Table>
));

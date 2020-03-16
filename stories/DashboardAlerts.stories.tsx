import React from 'react';
import { Table } from 'reactstrap';
import { storiesOf } from '@storybook/react';
import DashboardAlert from '../src/DashboardAlert';

// target
import '../src/assets/main.css';

const Examples = ({ canDismiss }: { canDismiss: boolean }) => (
  <Table className="shifter-ui">
    <tbody>
      <tr>
        <td>
          <DashboardAlert type="info" canDismiss={canDismiss}>
            Use for general messages
          </DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="success" canDismiss={canDismiss}>
            Use for successful operations
          </DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="warning" canDismiss={canDismiss}>
            Use for important alerts
          </DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="error" canDismiss={canDismiss}>
            Use for API errors or user errors
          </DashboardAlert>
        </td>
      </tr>
      <tr>
        <td>
          <DashboardAlert type="danger" canDismiss={canDismiss}>
            Warn users of the dangers of their action
          </DashboardAlert>
        </td>
      </tr>
    </tbody>
  </Table>
);

storiesOf('Dashboard Alerts', module)
  .add('Styles', () => <Examples canDismiss />)
  .add('Static', () => <Examples canDismiss={false} />);

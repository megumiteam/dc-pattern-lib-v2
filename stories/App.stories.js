import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';
import Logo from '../src/Logos';
import Dashboard from '../src/Dashboard';
import DashboardMain from '../src/DashboardMain';
import DashboardSidebar from '../src/DashboardSidebar';
import DashboardCard from '../src/DashboardCard';
import DashboardCardGroup from '../src/DashboardCardGroup';
import DashboardNav from '../src/DashboardNav';
import DashboardDimmer from '../src/DashboardDimmer';

storiesOf('App', module).add('Dimmer', () => <DashboardDimmer isOpen />);

storiesOf('App', module).add('Sidebar', () => <DashboardSidebar />);

storiesOf('App', module).add('Full Example', () => (
  <Dashboard>
    <DashboardSidebar>
      <div className="py-4">
        <Logo logoStyle="logomark-color" />
      </div>
      <div className="pb-4">
        <Button color="outline-primary">
          <FaBeer />
          {' '}
Create New Site
        </Button>
      </div>
      <DashboardNav />
    </DashboardSidebar>
    <DashboardMain>
      <DashboardCardGroup>
        <DashboardCard title="Dashboard Card" />
      </DashboardCardGroup>
    </DashboardMain>
  </Dashboard>
));

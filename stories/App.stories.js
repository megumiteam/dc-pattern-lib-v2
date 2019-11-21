import React from 'react';
import { storiesOf } from '@storybook/react';
import AppDimmer from '../src/AppDimmer';
import AppDrawer from '../src/AppDrawer';
import AppDrawerToggle from '../src/AppDrawerToggle';
import Dashboard from '../src/Dashboard';
import DashboardMain from '../src/DashboardMain';
import DashboardSidebar from '../src/DashboardSidebar';
import DashboardCard from '../src/DashboardCard';
import DashboardCardGroup from '../src/DashboardCardGroup';
// import AppNav from '../src/AppNav';

storiesOf('App', module).add('Dimmer', () => <AppDimmer isOpen />);

storiesOf('App', module).add('Sidebar', () => <DashboardSidebar />);

storiesOf('App', module).add('Drawer', () => <AppDrawer isOpen="true" />);

storiesOf('App', module).add('Toggle', () => <AppDrawerToggle />);

// storiesOf('App', module).add('Nav', () => <AppNav items={} />);

storiesOf('App', module).add('Full Example', () => (
  <Dashboard>
    <DashboardSidebar>App Sidebar</DashboardSidebar>
    <DashboardMain>
      <DashboardCardGroup>
        <DashboardCard title="Dashboard Card" />
      </DashboardCardGroup>
    </DashboardMain>
  </Dashboard>
));

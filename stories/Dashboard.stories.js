import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Row, Col } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';
import Logo from '../src/Logos';
import Dashboard from '../src/Dashboard';
import DashboardMain from '../src/DashboardMain';
import DashboardSidebar from '../src/DashboardSidebar';
import DashboardCard from '../src/DashboardCard';
import DashboardCardGroup from '../src/DashboardCardGroup';
import DashboardNav from '../src/DashboardNav';
import DashboardDimmer from '../src/DashboardDimmer';
import DashboardSearch from '../src/DashboardSearch';
import Avatar from '../src/Avatar';
import Notifications from '../src/Notifications';

storiesOf('Dashboard', module).add('Dimmer', () => <DashboardDimmer isOpen />);
storiesOf('Dashboard', module).add('Sidebar', () => <DashboardSidebar />);
storiesOf('Dashboard', module).add('Avatar', () => <Avatar />);
storiesOf('Dashboard', module).add('Notifications', () => <Notifications />);
storiesOf('Dashboard', module).add('Search', () => <DashboardSearch />);

storiesOf('Dashboard', module).add('Full Mockup', () => (
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
      <Row className="d-flex mb-gutter">
        <Col>
          <DashboardSearch />
        </Col>
        <Col className="flex-grow-0">
          <Avatar email="hello@getshifter.io" />
        </Col>
        <Col className="flex-grow-0">
          <Notifications />
        </Col>
      </Row>
      <DashboardCardGroup>
        <DashboardCard title="Dashboard Card" />
      </DashboardCardGroup>
    </DashboardMain>
  </Dashboard>
));

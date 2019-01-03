import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Row, Col, Button, DropdownToggle, Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { AppMain, AppDrawer, AppNav, AppSidebar, DashboardCard, DashboardCardGroup } from './../../src';
import { demoPrimaryNav, demoSecondaryNav } from './Menus/';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appDrawer: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      appDrawer: !this.state.appDrawer
    });
  }

  render() {
    return <div scheme="amimoto" className="d-flex vh-100 app-inner">
      <AppSidebar inner={
          <Fragment>
            <button onClick={this.toggleNav}>+</button>
            <button onClick={this.toggleNav}>+</button>
          </Fragment>
        } toggle={this.toggleNav}
      >
      <Router>
        <Switch>
          <Route
            path="/"
            render={props => <AppNav dark items={demoPrimaryNav()} />}
          />
        </Switch>
      </Router>
      </AppSidebar>
      <AppMain>
        <AppDrawer toggle={this.toggleNav} active={this.state.appDrawer}>
          <Router>
            <Switch>
              <Route
                path="/"
                render={props => <AppNav items={demoSecondaryNav()} />}
              />
            </Switch>
          </Router>
        </AppDrawer>
        <DashboardCardGroup>
          <DashboardCard
            title="Dashboard Card Title"
            actions={<Dropdown>
            <DropdownToggle color="link" caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>}>
            Just a single Dashboard Card with a actions prop demo in a dashboard card group.
          </DashboardCard>
        </DashboardCardGroup>
        <DashboardCardGroup>
          <DashboardCard title="Dashboard Card in a Group">
            Just two dashboard cards in a dashboard card group.
          </DashboardCard>
          <DashboardCard title="Dashboard Card in a Group">
          Just two dashboard cards in a dashboard card group.
          </DashboardCard>
        </DashboardCardGroup>
        <DashboardCardGroup>
          <DashboardCard>
            <Row>
              <Col md={3}>
                <img className="img-fluid w-100" src="//placehold.it/400x300" />
              </Col>
              <Col>
                
              </Col>
            </Row>
          </DashboardCard>
        </DashboardCardGroup>
      </AppMain>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

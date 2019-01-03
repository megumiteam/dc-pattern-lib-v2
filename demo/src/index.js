import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    return <div className="d-flex vh-100 app-inner">
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
            actions="Actions Prop">
            Dashboard Card Body
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
      </AppMain>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

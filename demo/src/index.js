import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppMain, AppDrawer, AppNav, AppSidebar } from './../../src';
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
      <AppSidebar>
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
                render={props => <AppNav dark items={demoSecondaryNav()} />}
              />
            </Switch>
          </Router>
        </AppDrawer>
        <h1>dc-pattern-lib</h1>
        <button color="danger" onClick={this.toggleNav}>Toggle Drawer</button>
      </AppMain>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppMain, AppDrawer, AppNav } from './../../src';
import { demoNav } from './Menus/';

class Demo extends Component {
  render() {
    return <div>
      <AppMain>
        <AppDrawer active>
          <Router>
            <Switch>
              <Route
                path="/"
                render={props => <AppNav {...props} dark items={demoNav()} />}
              />
            </Switch>
          </Router>
        </AppDrawer>
        <h1>dc-pattern-lib</h1>
      </AppMain>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

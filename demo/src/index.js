import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  Badge
} from "reactstrap";
import {
  AppMain,
  AppDrawer,
  AppNav,
  AppSidebar,
  DashboardCard,
  DashboardCardGroup
} from "./../../src";
import { demoPrimaryNav, demoSecondaryNav } from "./Menus/";

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
    return (
      <div scheme="amimoto" className="d-flex vh-100 app-inner">
        <AppSidebar
          inner={
            <Fragment>
              <button onClick={this.toggleNav}>+</button>
              <button onClick={this.toggleNav}>+</button>
            </Fragment>
          }
          toggle={this.toggleNav}>
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
              actions={
                <Dropdown>
                  <DropdownToggle color="link" caret>
                    Dropdown
                  </DropdownToggle>
                </Dropdown>
              }>
              Just a single Dashboard Card with a actions prop demo in a
              dashboard card group.
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
            <DashboardCard
              title="Sites"
              bodyClassName="p-0"
              actions={
                <Dropdown>
                  <DropdownToggle color="link" caret>
                    Sort by
                  </DropdownToggle>
                </Dropdown>
              }>
              <Row>
                <Col>
                  <Table hover>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <a className="text-dark" href="#">
                              backchannel.internetsociety.org
                            </a>
                          </div>
                          <div>
                            <small>
                              <a className="text-dark" href="#">
                                amimoto.a508
                              </a>
                            </small>
                            {" - "}
                            <small>Created 2019-12-16</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="ml-auto">
                              <Button color="link">Manage</Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <a className="text-dark" href="#">
                              backchannel.internetsociety.org
                            </a>
                          </div>
                          <div>
                            <small>
                              <a className="text-dark" href="#">
                                amimoto.a508
                              </a>
                            </small>
                            {" - "}
                            <small>Created 2019-12-16</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="ml-auto">
                              <Button color="link">Manage</Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </DashboardCard>
          </DashboardCardGroup>
          <DashboardCardGroup>
            <DashboardCard
              title="Domains"
              bodyClassName="p-0"
              actions={<Button color="white">Add a Custom Domain</Button>}>
              <Row>
                <Col>
                  <Table hover>
                    <tbody>
                      <tr>
                        <td>
                          <div>
                            <a className="text-dark font-weight-bold" href="#">
                              d1lq6t9ljyrt3a.cloudfront.net
                            </a>
                          </div>
                          <div>
                            <small>Default Subdomain</small>
                          </div>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <a className="text-dark font-weight-bold" href="#">
                              internetsociety.com
                            </a>
                          </div>
                          <div>
                            <small>Domain Alias</small>
                            {" - "}
                            <small className="text-yellow">Pending</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="ml-auto">
                              <Button color="link">Manage</Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <a className="text-dark font-weight-bold" href="#">
                              www.internetsociety.com
                            </a>
                          </div>
                          <div>
                            <small>Primary Domain</small>
                            {" - "}
                            <small className="text-green">Verified</small>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="ml-auto">
                              <Button color="link">Manage</Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </DashboardCard>
          </DashboardCardGroup>
          <DashboardCardGroup>
            <DashboardCard title="Overview">
              <Row>
                <Col md={2}>
                  <img
                    className="img-fluid w-100"
                    src="//placehold.it/400x300"
                  />
                </Col>
                <Col />
              </Row>
            </DashboardCard>
          </DashboardCardGroup>
        </AppMain>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

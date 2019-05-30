/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  DropdownToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  Badge,
  ButtonGroup,
  UncontrolledTooltip,
  Input,
  Label,
} from 'reactstrap';
import {
  AppMain,
  AppDrawer,
  AppNav,
  AppSidebar,
  DashboardCard,
  DashboardCardGroup,
  DashboardCardLoader,
  ListItemRow,
} from '../../src';
import { demoPrimaryNav, demoSecondaryNav } from './Menus';
import ToggleScheme from './ToggleScheme';
import CopyDemo from './CopyDemo';
import '../../src/assets/main.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appDrawer: false,
      tooltipOpen: false,
    };

    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      appDrawer: !this.state.appDrawer,
    });
  }

  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <div className="d-flex vh-100 app-inner">
        <AppSidebar
          inner={
            <Fragment>
              <Button
                onClick={this.toggleNav}
                color="transparent"
                id="UncontrolledTooltipExample"
                className="btn-circle"
              >
                +
              </Button>
              <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
                Create
              </UncontrolledTooltip>
            </Fragment>
          }
          toggle={this.toggleNav}
        >
          <Router>
            <Switch>
              <Route path="/" render={props => <AppNav dark items={demoPrimaryNav()} />} />
            </Switch>
          </Router>
        </AppSidebar>
        <AppMain>
          <AppDrawer toggle={this.toggleNav} active={this.state.appDrawer}>
            <Router>
              <Switch>
                <Route path="/" render={props => <AppNav items={demoSecondaryNav()} />} />
              </Switch>
            </Router>
          </AppDrawer>
          <DashboardCardLoader />
          <DashboardCardGroup>
            <DashboardCard title="Toggle Scheme">
              <ToggleScheme />
            </DashboardCard>
          </DashboardCardGroup>
          <DashboardCardGroup>
            <DashboardCard
              title={
                <div>
                  <Input size="sm" placeholder="Search sites" />
                </div>
              }
              bodyClassName="p-0"
              actions={
                <Fragment>
                  <Button size="sm" onClick={this.toggleNav} color="white" className="btn-circle">
                    +
                  </Button>
                </Fragment>
              }
            >
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
                            {' - '}
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
                            {' - '}
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
              actions={
                <Button color="primary" size="sm">
                  Add a Custom Domain
                </Button>
              }
            >
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
                            {' - '}
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
                            {' - '}
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
                  <img className="img-fluid w-100" src="//placehold.it/400x300" />
                </Col>
                <Col />
              </Row>
            </DashboardCard>
          </DashboardCardGroup>
          <DashboardCardGroup>
            <DashboardCard
              title="SFTP/SSH"
              actions={
                <Fragment>
                  <Button size="sm" onClick={this.toggleNav} color="white" className="btn-circle">
                    +
                  </Button>
                </Fragment>
              }
            >
              <Row>
                <Col>
                  <CopyDemo />
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                  />
                </Col>
                <Col>Password</Col>
                <Col>Port</Col>
              </Row>
            </DashboardCard>
          </DashboardCardGroup>
          <Router>
            <ListItemRow>
              <tr>
                <td>
                  <h1>Hello</h1>
                </td>
                <td>
                  <p className="text-muted">
                    <b>Owner</b>
                  </p>
                  <p>digitalcube</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h1>Hello</h1>
                </td>
                <td>
                  <p className="text-muted">
                    <b>Owner</b>
                  </p>
                  <p>shifter</p>
                </td>
              </tr>
            </ListItemRow>
          </Router>
        </AppMain>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));

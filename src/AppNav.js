// @flow
import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

type Props = {
  items: {
    navItems: [
      {
        name: string,
        to: string,
      },
    ],
    navLabels: {
      name: string,
    },
  },
  active: boolean,
  dark: boolean,
};
type State = {
  appDrawer: boolean,
};

export default class AppNav extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      appDrawer: false,
    };
    this.active = this.active.bind(this);
  }

  active() {
    const { appDrawer } = this.state;
    this.setState({
      appDrawer: !appDrawer,
    });
  }

  render() {
    const NavItems = () => {
      const items = this.props.items.navItems.map(item => (
        <NavItem key={item.name}>
          <NavLink
            onClick={this.props.active}
            to={item.to}
            activeClassName="active"
            tag={RRNavLink}
          >
            {item.name}
          </NavLink>
        </NavItem>
      ));
      return items;
    };

    const NavTitle = () => {
      const title = this.props.items.navLabels.name;
      if (!title) {
        return null;
      }

      return <h2 className={`h6 ${this.props.dark ? 'text-white' : ''}`}>{title}</h2>;
    };

    return (
      <Nav
        vertical
        pills
        className={`d-flex flex-grow-1 mb-auto  ${this.props.dark ? 'nav-pills-dark' : ''}`}
      >
        <NavTitle />
        <NavItems />
      </Nav>
    );
  }
}

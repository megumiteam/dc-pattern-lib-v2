// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class AppNav extends Component {
  constructor() {
    super();
    this.state = {
      appDrawer: false,
    };
    this.active = this.active.bind(this);
  }

  active() {
    this.setState({
      appDrawer: !this.state.appDrawer,
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

AppNav.propTypes = {
  items: PropTypes.object,
  dark: PropTypes.bool,
};

AppNav.defaultProps = {
  items: '',
  dark: false,
};

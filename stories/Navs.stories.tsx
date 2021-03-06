import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { storiesOf } from '@storybook/react';

// target
import '../src/assets/main.css';

storiesOf('Navs', module).add('Styles', () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">reactstrap</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Options
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  </Navbar>
));

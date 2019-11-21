import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';

const DashboardNav = ({ children }: { children: React.Node }) => (
  <div>
    <Nav vertical>
      <NavLink href="#">
        <FaBeer />
        {' '}
Sites
      </NavLink>
      <NavLink href="#">
        <FaBeer />
        {' '}
Teams
      </NavLink>
      <NavLink href="#">
        <FaBeer />
        {' '}
Account
      </NavLink>
      <NavLink href="#">
        <FaBeer />
        {' '}
Guides
      </NavLink>
    </Nav>
    {children}
  </div>
);
export default DashboardNav;

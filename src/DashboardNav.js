import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';

const DashboardNav = ({ children }: { children: React.Node }) => (
  <div className="w-100">
    <Nav className="nav-sidebar" tabs vertical>
      <NavLink className="nav-sidebar__link mt-2 pl-5" href="#">
        <FaBeer className="mr-4" />
        {' '}
Sites
      </NavLink>
      <NavLink className="nav-sidebar__link mt-2 pl-5" href="#">
        <FaBeer className="mr-4" />
        {' '}
Teams
      </NavLink>
      <NavLink className="nav-sidebar__link mt-2 pl-5" href="#">
        <FaBeer className="mr-4" />
        {' '}
Account
      </NavLink>
      <NavLink className="nav-sidebar__link mt-2 pl-5" href="#">
        <FaBeer className="mr-4" />
        {' '}
Guides
      </NavLink>
    </Nav>
    {children}
  </div>
);
export default DashboardNav;

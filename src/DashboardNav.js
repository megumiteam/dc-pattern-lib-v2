import React from 'react';
import { Nav, NavLink } from 'reactstrap';

const DashboardNav = ({ children }: { children: React.Node }) => (
  <div>
    <Nav vertical>
      <NavLink href="#">Sites</NavLink>
      <NavLink href="#">Teams</NavLink>
      <NavLink href="#">Account</NavLink>
      <NavLink href="#">Guides</NavLink>
    </Nav>
    {children}
  </div>
);
export default DashboardNav;

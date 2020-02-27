import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import Icon from './Icons';

const DashboardNav = ({ children }: { children: React.ReactNode }) => (
  <div className="w-100">
    <Nav className="nav-sidebar" tabs vertical>
      <NavLink className="nav-sidebar__link mt-3 pl-3" href="#">
        <div className="nav-sidebar__icon-container rounded-circle text-center align-middle mr-3">
          <Icon iconStyle="icon-globe" className="nav-sidebar__icon" />
        </div>
        {' '}
        Sites
      </NavLink>
      <NavLink className="nav-sidebar__link mt-3 pl-3" href="#">
        <div className="nav-sidebar__icon-container rounded-circle text-center mr-3">
          <Icon iconStyle="icon-teams" className="nav-sidebar__icon" />
        </div>
        {' '}
        Teams
      </NavLink>
      <NavLink className="nav-sidebar__link mt-3 pl-3" href="#">
        <div className="nav-sidebar__icon-container rounded-circle text-center mr-3">
          <Icon iconStyle="icon-account" className="nav-sidebar__icon" />
        </div>
        {' '}
        Account
      </NavLink>
      <NavLink className="nav-sidebar__link mt-3 pl-3" href="#">
        <div className="nav-sidebar__icon-container rounded-circle text-center mr-3">
          <Icon iconStyle="icon-map" className="nav-sidebar__icon" />
        </div>
        {' '}
        Guides
      </NavLink>
    </Nav>
    {children}
  </div>
);
export default DashboardNav;

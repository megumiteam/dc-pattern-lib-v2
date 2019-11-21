// @flow
import React from 'react';
import { Col } from 'reactstrap';

type Props = { children: React.Node };

const DashboardSidebar = ({ children }: Props) => (
  <Col md="3" className="fixed-top fixed-bottom border-right d-none d-md-block">
    <div className="position-sticky d-flex flex-column align-items-center">{children}</div>
  </Col>
);
export default DashboardSidebar;

// @flow
import React from 'react';
import { Col } from 'reactstrap';

type Props = { children: React.Node };

const DashboardSidebar = ({ children }: Props) => (
  <Col md="3" className="fixed-top fixed-bottom border-right">
    <div className="position-sticky">{children}</div>
  </Col>
);
export default DashboardSidebar;

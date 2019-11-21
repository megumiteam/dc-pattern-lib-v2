import React from 'react';
import { Col } from 'reactstrap';

const DashboardMain = ({ children }: { children: React.Node }) => (
  <Col md="9" className="ml-sm-auto">
    {children}
  </Col>
);
export default DashboardMain;

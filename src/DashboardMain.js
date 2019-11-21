import React from 'react';
import { Col } from 'reactstrap';

const DashboardMain = ({ children }: { children: React.Node }) => (
  <Col sm="9" className="ml-auto">
    {children}
  </Col>
);
export default DashboardMain;

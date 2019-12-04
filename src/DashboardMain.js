import React from 'react';
import { Col } from 'reactstrap';

const DashboardMain = ({ children }: { children: React.Node }) => (
  <Col md="9" className="justify-content-around ml-sm-auto py-4">
    {children}
  </Col>
);
export default DashboardMain;

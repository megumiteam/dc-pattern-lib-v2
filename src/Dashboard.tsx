import * as React from 'react';
import { Container, Row } from 'reactstrap';

const Dashboard = ({ children }: { children: React.ReactNode }) => (
  <Container fluid>
    <Row>{children}</Row>
  </Container>
);
export default Dashboard;

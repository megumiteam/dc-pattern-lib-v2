import * as React from 'react';
import { Container, Col, Row } from 'reactstrap';

const AppMain = ({ children }: { children: React.Node }) => (
  <div className="position-relative z-1 flex-grow-1 app-right">
    <Container fluid className="bg-gray-100">
      <Row>
        <Col className="d-flex flex-column flex-grow-1 h-100">{children}</Col>
      </Row>
    </Container>
  </div>
);
export default AppMain;

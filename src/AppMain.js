import t from 'prop-types';
import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class AppMain extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div className="position-relative z-1 flex-grow-1 app-right">
        <Container fluid className="bg-gray-100">
          <Row>
            <Col className="d-flex flex-column flex-grow-1 h-100 pt-4">
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

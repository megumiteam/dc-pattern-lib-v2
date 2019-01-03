import t from 'prop-types'
import React, {Component} from 'react'
import { Container, Col, Row } from 'reactstrap';

export default class AppMain extends Component {
  render() {
    let {children, ...props} = this.props
    return <div className="position-relative z-1 flex-grow-1 app-right">
    <Container>
      <Row>
        <Col className="d-flex flex-column flex-grow-1 vh-100 pt-4">
          {children}
        </Col>
      </Row>
    </Container>
  </div>
  }
}
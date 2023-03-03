import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

import Connect from './Connect';

const ResumePage = () => (
  <Container className="d-flex justify-content-center flex-column align-items-center">
    <Row>
      <Col xs={12}>
        <img src="./resume.png" alt="resume" className="resume" />
      </Col>
    </Row>
    <Row
      className="section-container"
      id="contact"
      style={{ minHeight: 'fit-content' }}
    >
      <Col xs={12}>
        <Connect />
      </Col>
    </Row>
  </Container>
);

export default ResumePage;

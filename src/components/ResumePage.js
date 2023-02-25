import { Container } from 'react-bootstrap';
import React from 'react';

import resume from '../images/resume_screenshot.png';

const ResumePage = () => (
  <Container className="d-flex justify-content-center">
    <img src={resume} alt="resume" className="resume" />
  </Container>
);

export default ResumePage;

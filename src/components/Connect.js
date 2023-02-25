/* eslint-disable import/no-extraneous-dependencies */
import { Col, Row } from 'react-bootstrap';

import FadeIn from './FadeIn';

const Connect = () => (
  <>
    <FadeIn>
      <Row className="mt-5 text-center section-header">
        <h1>Connect With Me</h1>
      </Row>
    </FadeIn>
    <FadeIn>
      <Row className="justify-content-between text-center">
        <Col>
          <a
            href="https://twitter.com/da_goodenough"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/daGoodenough"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" />
          </a>
        </Col>
        <Col>
          <a
            href="https://linkedin.com/in/damian-goodenough"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
          </a>
        </Col>
      </Row>
    </FadeIn>
  </>
);
export default Connect;

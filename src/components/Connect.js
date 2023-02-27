/* eslint-disable import/no-extraneous-dependencies */
import { Col, Row } from 'react-bootstrap';

import FadeIn from './FadeIn';

const Connect = () => (
  <>
    <FadeIn>
      <Row className="mt-5 text-center section-header connect-section">
        <Col xs={12}>
          <h2>Connect With Me</h2>
        </Col>
        <Col xs={12}>
          <a href="mailto:dgoodenough@proton.me">
            dgoodenough@proton.me
            {/* <i className="fa-regular fa-copy" /> */}
          </a>
        </Col>
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

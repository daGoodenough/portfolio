import { Row, Col } from 'react-bootstrap';

import FadeIn from './FadeIn';
import baumanLogo from '../images/bauman_logo.jpg';
import slvhsLogo from '../images/slvhs_logo.jpg';
import parsityLogo from '../images/parsity_logo.png';

const Education = () => (
  <>
    <FadeIn>
      <div className="mt-5 text-center section-header">
        <h2>Education</h2>
      </div>
    </FadeIn>
    <FadeIn>
      <Row className="education">
        <Col
          md={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a href="https://parsity.io/" target="_blank" rel="noreferrer">
            <img src={parsityLogo} alt="Parsity Logo" className="education" />
          </a>
        </Col>

        <Col
          className="d-flex align-items-center justify-content-center"
          md={3}
          xs={12}
        >
          <div className="education">Parsity Code School</div>
        </Col>
        <Col className="d-flex align-items-center" md={6}>
          <p className="education-description">
            Learned how to build full stack web applications using{' '}
            <em>React</em>,<em> Redux</em>, <em>Node.JS</em>, <em>Express</em>,
            and <em>MongoDB</em>. Strong emphasis on testing (using{' '}
            <em>Mocha</em>/<em>Chai</em>) and <em>MV</em> design patterns.
          </p>
        </Col>
      </Row>
    </FadeIn>
    <FadeIn>
      <Row className="education">
        <Col
          md={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a
            href="https://baumancollege.org/tag/nhi/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={baumanLogo}
              alt="Bauman College Logo"
              className="education"
            />
          </a>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          md={3}
          xs={12}
        >
          <div className="education">National Holistic Institute</div>
        </Col>
        <Col className="d-flex align-items-center" md={6}>
          <p className="education-description">
            Studied how to <strong>heal the body</strong> using food as
            medicine. Topics ranged from building <em>healthy lifestyles</em>{' '}
            all the way to
            <em> anatomy</em> and <em>biochemistry</em>. Focused on the ways
            that the food we eat and our physical states affect our wellness.
          </p>
        </Col>
      </Row>
    </FadeIn>
    <FadeIn>
      <Row className="education">
        <Col
          md={2}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src={slvhsLogo}
            alt="SLV High School Logo"
            className="education"
          />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          md={3}
        >
          <div className="education">High School</div>
        </Col>
        <Col className="d-flex align-items-center" md={6}>
          <p className="education-description">
            Graduated with <em>Suma Cum Laude</em> and a 4.42 GPA <br />
            Completed calculus series by Senior year.
          </p>
        </Col>
      </Row>
    </FadeIn>
  </>
);

export default Education;

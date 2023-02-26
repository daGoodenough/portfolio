import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';
import profilePic from '../images/profile_pic.jpg';

const AboutMe = () => (
  <>
    <FadeIn>
      <Row className="text-center section-header">
        <Col xs={12}>
          <h1>Damian</h1>
        </Col>
        <h4>| Builder | Adventurer | Bitcoiner |</h4>
      </Row>
    </FadeIn>
    <Col
      className="d-flex align-items-center justify-content-center"
      md={6}
      xs={12}
    >
      <FadeIn>
        <img
          src={profilePic}
          alt="Profile portrait"
          className="home-profile-pic"
        />
      </FadeIn>
    </Col>
    <Col className="d-flex align-items-center" md={6} xs={12}>
      <FadeIn>
        <div>
          <p className="short-bio">
            &emsp;Damian is a driven learner with a varied background that
            provides a unique perspective to his work. He has developed
            discipline through doing what no one else will.
          </p>
          <p>
            &emsp;Damian is experienced with
            <em> JavaScript</em>, skilled at building web applications using
            MERN (<em>Mongo</em>, <em>Express</em>, <em>React</em>, and{' '}
            <em>Node</em>) and has a deep understanding of <em>Bitcoin</em> and
            it's technology. His goals and skills are highly motivated his
            desire to be great at what he does and build a better future.
          </p>
        </div>
      </FadeIn>
    </Col>
    <FadeIn>
      <Row className="align-items-center buttons mt-3">
        <Col className="home-button">
          <Button variant="dark" as={Link} to="/resume">
            Resume
          </Button>
        </Col>
        {/* <Col className="home-button">
          <Button variant="dark" as={Link} to="/about">
            About Me
          </Button>
        </Col> */}
        <Col className="home-button">
          <Button variant="dark" as="a" href="#contact">
            Contact
          </Button>
        </Col>
      </Row>
    </FadeIn>
  </>
);

export default AboutMe;

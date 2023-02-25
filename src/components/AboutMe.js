import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';
import profilePic from '../images/profile_pic.jpg';

const AboutMe = () => (
  <>
    <FadeIn>
      <div className="text-center">
        <h1>Damian</h1>
        <h4>Bitcoiner | Learner | Adventurer</h4>
      </div>
    </FadeIn>
    <Col md={6} xs={12}>
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
        <div className="short-bio">
          Damian is a driven learner with a varied background that provides a
          unique perspective to his work. He has developed discipline through
          doing what no one else wants to do. Damian is skilled at building web
          applications using MERN (Mongo, Express, React, and Node) and is
          fascinated by self-hosting and peer-to-peer technologies. His goals
          and skills are highly motivated by Bitcoin and his desire to build a
          better future.
        </div>
      </FadeIn>
    </Col>
    <FadeIn>
      <Row>
        <Col className="home-buttons">
          <Button variant="dark" as={Link} to="/resume">
            Resume
          </Button>
        </Col>
        <Col className="home-buttons">
          <Button variant="dark" as={Link} to="/about">
            More About Me
          </Button>
        </Col>
        <Col className="home-buttons">
          <Button variant="dark" as={Link} to="/contact">
            Contact
          </Button>
        </Col>
      </Row>
    </FadeIn>
  </>
);

export default AboutMe;

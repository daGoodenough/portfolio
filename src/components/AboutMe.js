import { Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';
import profilePic from '../images/profile_pic.jpg';

const AboutMe = () => {
  const handleResumeClick = () => {
    window.open('./resume.pdf');
  };
  return (
    <>
      <FadeIn>
        <Row className="text-center section-header">
          <Col xs={12}>
            <h1>Damian</h1>
          </Col>
          <h3>| Builder | Adventurer | Bitcoiner |</h3>
        </Row>
      </FadeIn>
      <Col
        className="d-flex align-items-center justify-content-center"
        lg={4}
        md={12}
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
      <Col className="d-flex align-items-center" lg={8} md={12} xs={12}>
        <FadeIn>
          <div>
            <p className="short-bio">
              &emsp;Damian has delved deep into the proverbial rabbit hole of
              bitcoin and shows no signs of turning back. He has developed
              discipline by doing what no one else will, such as packing moose
              through the Alaskan bush.
            </p>
            <p>
              &emsp; From an urge to contribute to bitcoin, Damian has been
              learning what it means to be a "bitcoin developer". He went
              through a bootcamp to learn the fundamentals of writing code and
              building full stack web apps with a personal focus on the backend
              of the stack.
            </p>
            <p>
              &emsp;Since then, he has continued to build his skills as a
              bitcoin developer by winning hackathons, always writing code, and
              consuming every technical resource he can find such as Jimmy
              Song's book,{' '}
              <span style={{ textDecoration: 'underline' }}>
                Programming Bitcoin
              </span>
              . His goals and skills are highly motivated by his desire to be
              great at what he does and build a better future.
            </p>
          </div>
        </FadeIn>
      </Col>
      <FadeIn>
        <Row className="align-items-center buttons mt-3">
          <Col className="home-button">
            <Button onClick={handleResumeClick} variant="dark">
              Resumé
            </Button>
          </Col>
          <Col className="arrow-section">
            <Row className="arrow bounce">
              <i className="fa fa-arrow-down fa-2x" />
            </Row>
            <Row>
              <p className="text-center arrow-message">
                Scroll down for <strong>proof-of-work</strong>
              </p>
            </Row>
          </Col>
          <Col className="home-button">
            <Button variant="dark" as="a" href="#contact">
              Contact
            </Button>
          </Col>
        </Row>
      </FadeIn>
    </>
  );
};

export default AboutMe;

import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';
import FeaturedProject from './FeaturedProject';
import Education from './Education';
import Connect from './Connect';
import SecondProject from './SecondProject';
import ProgrammingBitcoin from './ProgrammingBitcoin';

const Home = () => (
  <Container className="d-flex align-items-around flex-column">
    <Row className="section-container align-content-around" id="about">
      <AboutMe />
    </Row>
    <Row className="section-container" id="projects">
      <FeaturedProject />
    </Row>
    <Row className="section-container" id="projects">
      <SecondProject />
    </Row>
    <Row className="section-container" id="projects">
      <ProgrammingBitcoin />
    </Row>
    <Row className="section-container" id="education">
      <Education />
    </Row>
    <Row
      className="section-container"
      id="contact"
      style={{ minHeight: 'fit-content' }}
    >
      <Connect />
    </Row>
  </Container>
);

export default Home;

import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';
import FeaturedProject from './FeaturedProject';
import Education from './Education';

const Home = () => (
  <Container>
    <Row className="section-container align-content-between" id="about">
      <AboutMe />
    </Row>
    <Row className="section-container" id="projects">
      <FeaturedProject />
    </Row>
    <Row className="section-container" id="education">
      <Education />
    </Row>
  </Container>
);

export default Home;

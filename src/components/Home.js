import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';
import FeaturedProject from './FeaturedProject';
import Education from './Education';

const Home = () => (
  <Container>
    <Row className="section-container align-content-between">
      <AboutMe />
    </Row>
    <Row className="section-container">
      <FeaturedProject />
    </Row>
    <Row className="section-container">
      <Education />
    </Row>
  </Container>
);

export default Home;

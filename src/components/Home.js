import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';
import FeaturedProject from './FeaturedProject';
import Education from './Education';

const Home = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <AboutMe />
    </Row>
    <Row>
      <FeaturedProject />
    </Row>
    <Row>
      <Education />
    </Row>
  </Container>
);

export default Home;

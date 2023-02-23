import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';
import FeaturedProject from './FeaturedProject';

const Home = () => (
  <Container className="mt-5">
    <Row className="text-center">
      <h1>Damian</h1>
      <h4>Bitcoiner | Explorer | Adventurer</h4>
    </Row>
    <Row className="justify-content-center">
      <AboutMe />
    </Row>
    <Row>
      <FeaturedProject />
    </Row>
  </Container>
);

export default Home;

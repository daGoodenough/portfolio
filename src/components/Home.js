import { Container, Row } from 'react-bootstrap';

import AboutMe from './AboutMe';

const Home = () => (
  <Container className="mt-4">
    <Row className="justify-content-center">
      <AboutMe />
    </Row>
  </Container>
);

export default Home;

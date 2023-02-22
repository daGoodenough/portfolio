import { Container, Row } from 'react-bootstrap';

import ProjectList from './ProjectList';

const Home = () => (
  <Container className="mt-4">
    <Row className="justify-content-center">
      <ProjectList />
    </Row>
  </Container>
);

export default Home;

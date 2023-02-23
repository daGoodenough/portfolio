import { Container, Row, Col } from 'react-bootstrap';
import profilePic from '../images/profile_pic.jpg';

const AboutPage = () => (
  <Container>
    <Row>
      <img src={profilePic} alt="Profile portrait" className="about-page" />
    </Row>
    <Row>This is my bio. I am an awesome engineer.</Row>
    <Row>
      <h3>Skills</h3>
      <Col>
        <div>Frameworks and technologies</div>
        <ul>
          <li>Docker</li>
          <li>Bitcoin Core</li>
          <li>React</li>
          <li>Node.JS</li>
          <li>Express</li>
          <li>MongoDB </li>
        </ul>
      </Col>
      <Col>
        <div>Libraries</div>
        <ul>
          <li>BitcoinJS</li>
          <li>Bootstrap</li>
          <li>PassportJS</li>
          <li>Redux</li>
          <li>Mongoose</li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default AboutPage;

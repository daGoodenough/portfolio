import { Col } from 'react-bootstrap';
import profilePic from '../images/profile_pic.jpg';

const AboutMe = () => (
  <>
    <div className="text-center">
      <h1>Damian</h1>
      <h4>Bitcoiner | Explorer | Adventurer</h4>
    </div>
    <Col className="mt-5" md={6} xs={12}>
      <img
        src={profilePic}
        alt="Profile portrait"
        className="home-profile-pic"
      />
    </Col>
    <Col className="d-flex align-items-center mt-5" md={6} xs={12}>
      <div className="short-bio">
        A driven learner with a varied background that provides a unique
        perspective to his work. Damian has developed discipline through doing
        what no one else wants to do. He is skilled at building web applications
        using MERN (Mongo, Express, React, and Node), and is fascinated by
        self-hosting and peer-to-peer technoliges. His goals and skills are
        highly motivated by Bitcoin, and the desire to build a better future.
      </div>
    </Col>
  </>
);

export default AboutMe;

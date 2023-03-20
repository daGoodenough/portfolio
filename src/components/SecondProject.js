import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FadeIn from './FadeIn';
import newsEdu from '../images/projects/news_edu.png';

const SecondProject = () => (
  <>
    <Row className="mt-5">
      <Col className="d-flex align-items-center justify-content-center flex-column text-center">
        <FadeIn>
          <h2>News Edu</h2>
          <h5>Learn new languages by reading the news</h5>
        </FadeIn>
      </Col>
    </Row>
    <Row>
      <Col
        xl={6}
        md={8}
        xs={12}
        className="justify-content-center d-flex flex-column"
      >
        <FadeIn>
          <img
            src={newsEdu}
            alt="News edu Website"
            className="featured-project"
          />
          <div className="featured-link">
            <a
              href="https://news-edu.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Go To App <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </div>
        </FadeIn>
      </Col>
      <Col className="d-flex align-items-center justify-content-end" md={4}>
        <FadeIn>
          <p className="second-project">
            Frontend Hackathon built primarily using React and Redux, the News
            API, and a web scraping API. Myself and 2 other team members
            completed this project in just one week with over 200 commits. I
            learned how to work effectivley as part of a team and meet our goals
            with a limited timeline. <br /> <br />
            <strong>Key Technologies: </strong>ReactJS, React Redux, and React
            Bootstrap
          </p>
        </FadeIn>
      </Col>
    </Row>
    <FadeIn>
      <Row className="align-items-center buttons mt-3">
        <Col className="d-flex justify-content-around">
          <Button
            variant="dark"
            as="a"
            href="https://www.loom.com/share/43a0b31879dc437e932dda1c74bb1f66"
            target="blank"
          >
            View Demo
          </Button>
          <Button variant="dark" as="a" href="/projects">
            More Projects
          </Button>
        </Col>
      </Row>
    </FadeIn>
  </>
);

export default SecondProject;

import { Container, Col, Row } from 'react-bootstrap';

import projectsObj from '../data/projects';
import FadeIn from './FadeIn';
import Connect from './Connect';

const ProjectsPage = () => (
  <Container>
    <Row className="text-center section-header mb-3">
      <h1>Projects</h1>
      <h5>June 13, 2022 =&gt; YTD</h5>
    </Row>

    {Object.keys(projectsObj).map((project) => (
      <FadeIn key={project}>
        <Row className="mb-5">
          <Col xs={12} md={8} xl={6}>
            <h4 className="text-center project-title">
              {projectsObj[project].title}
            </h4>
            <a
              href={projectsObj[project].link || '#'}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={projectsObj[project].imageSrc}
                alt={projectsObj[project].imageAlt}
                className="projects-page"
              />
            </a>
            <Row className="text-center m-3">
              <a href={projectsObj[project].github}>
                <i className="fa-brands fa-github projects-page" />
              </a>
            </Row>
          </Col>
          <Col
            className="d-flex flex-column justify-content-center"
            xs={12}
            md={4}
            xl={6}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: projectsObj[project].description,
              }}
              className="project-page-description"
            />
          </Col>
        </Row>
      </FadeIn>
    ))}
    <Row
      className="section-container"
      id="contact"
      style={{ minHeight: 'fit-content' }}
    >
      <Col xs={12}>
        <Connect />
      </Col>
    </Row>
  </Container>
);

export default ProjectsPage;

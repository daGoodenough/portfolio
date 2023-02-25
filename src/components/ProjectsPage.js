import { Container, Col, Row } from 'react-bootstrap';

import projectsObj from '../data/projects';
import FadeIn from './FadeIn';

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
            <h4 className="text-center">{projectsObj[project].title}</h4>
            <a
              href={projectsObj[project].link || '#'}
              className="d-flex flex-column align-items-center"
            >
              <img
                src={projectsObj[project].imageSrc}
                alt={projectsObj[project].imageAlt}
                className="projects-page"
              />
              <p>{projectsObj[project].github}</p>
            </a>
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
  </Container>
);

export default ProjectsPage;

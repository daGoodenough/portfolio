import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';

import FadeIn from './FadeIn';
import learnBtcWallet from '../images/learn-btc-wallet-addr.png';

const FeaturedProject = () => (
  <>
    <Row className="mb-4">
      <Col className="d-flex align-items-center justify-content-center flex-column text-center">
        <FadeIn>
          <h2>Learn Bitcoin Wallet</h2>
          <h5>The wallet that helps you understand</h5>
        </FadeIn>
      </Col>
    </Row>
    <Row>
      <Col className="d-flex align-items-center" md={4}>
        <FadeIn>
          <p className="featured-project">
            Designed to help users understand concepts behind wallet software.
            Uses Docker to run a <em>Bitcoin Core</em> node in regtest mode.
            Users can create keys, address, and transactions all in the safe
            learning environment of regtest mode. <br /> <br />
            <strong>Key Technologies: </strong>BitcoinJS, React, NodeJS,
            MongoDB, and Docker
          </p>
        </FadeIn>
      </Col>
      <Col
        xl={6}
        md={8}
        xs={12}
        className="justify-content-center d-flex flex-column"
      >
        <FadeIn>
          <img
            src={learnBtcWallet}
            alt="Learn Bitcoin Wallet Website"
            className="featured-project"
          />
          <div className="featured-link">
            <a
              href="http://learnbtcwallet.com"
              target="_blank"
              rel="noreferrer"
            >
              Go To App <i className="fa-solid fa-arrow-up-right-from-square" />
            </a>
          </div>
        </FadeIn>
      </Col>
    </Row>
    <FadeIn>
      <Row className="align-items-center buttons mt-3">
        <Col className="d-flex justify-content-around">
          <Button
            variant="dark"
            as="a"
            href="https://www.loom.com/share/6fbf1e80237d426eb4bdc5de399f9ceb"
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

export default FeaturedProject;

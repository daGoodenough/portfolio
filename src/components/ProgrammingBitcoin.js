import { Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';

import FadeIn from './FadeIn';
import programmingBitcoin from '../images/programming_bitcoin_cover.jpeg';

const ProgrammingBitcoin = () => (
  <>
    <Row className="mb-4">
      <Col className="d-flex align-items-center justify-content-center flex-column text-center">
        <FadeIn>
          <h2>Programming Bitcoin</h2>
          <h5>a book by Jimmy Song </h5>
        </FadeIn>
      </Col>
    </Row>
    <Row className="justify-content-around">
      <Col className="d-flex align-items-center" md={4}>
        <FadeIn>
          <p className="featured-project">
            I started reading one chapter of{' '}
            <span className="book-title">Programming Bitcoin</span>{' '}
            <em>every day</em> on March 11th, 2023. Thirteen days later, I have
            written a LinkedIn post about every chapter and learned how to code
            a bitcoin library in Python. From this amazing book, I learned the
            basics of <strong>elliptic curve cryptography</strong>, and how
            bitcoin works at a technical level all the way from{' '}
            <strong>transaction creation</strong> and{' '}
            <strong>validation</strong> to the{' '}
            <strong>networking protocol</strong>. <br /> <br />
            <Link>Click here</Link> to see all my posts pertaing to{' '}
            <span className="book-title">Programming Bitcoin</span>
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
            src={programmingBitcoin}
            alt="Learn Bitcoin Wallet Website"
            className="programming-bitcoin featured-project"
          />
        </FadeIn>
      </Col>
    </Row>
    <FadeIn />
  </>
);

export default ProgrammingBitcoin;

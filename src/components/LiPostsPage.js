import { Row, Col, Container } from 'react-bootstrap';

const LiPostsPage = () => (
  <Container>
    <Row className="text-center">
      <h1>LinkedIn Posts</h1>
      <h3>
        <a href="https://www.linkedin.com/in/damian-goodenough/">
          Connect with me
        </a>
      </h3>
    </Row>
    <Row>
      <h4>Programming Bitcoin:</h4>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_ellipticcurvecryptography-bitcoin-programmingbitcoin-activity-7041076143982075905-xwIn"
            target="_blank"
            rel="noreferrer"
          >
            ch. 1 - Finite Field Math
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programming-cryptography-bitcoin-activity-7041444244439339008-HtG0"
            target="_blank"
            rel="noreferrer"
          >
            ch. 2 & 3 - Elliptic Curve Cryptgraphy{' '}
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch4-serialization-activity-7041946679691919360-tD6s"
            target="_blank"
            rel="noreferrer"
          >
            ch. 4 - Serialization
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_bitcoin-ide-activity-7042344238155501569-JKy6"
            target="_blank"
            rel="noreferrer"
          >
            ch. 5 & ch. 6 - Transaction and Script
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch7-transactionabrcreationabrandabrvalidation-activity-7042691822321618944-Jw_N"
            target="_blank"
            rel="noreferrer"
          >
            ch. 7 - Transaction Creation and Validation
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch8-p2sh-activity-7043247641450741760-fw57"
            target="_blank"
            rel="noreferrer"
          >
            ch. 8 - P2SH
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch9-blocks-activity-7043640433234649088-mSJ9"
            target="_blank"
            rel="noreferrer"
          >
            ch. 9 - Blocks
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch10-networking-activity-7043979881210118145-MNkQ"
            target="_blank"
            rel="noreferrer"
          >
            ch. 10 - Networking
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/posts/damian-goodenough_programmingbitcoin-ch11-spv-activity-7044461959366283264-zzps"
            target="_blank"
            rel="noreferrer"
          >
            ch. 11 & ch. 12 - Light CLients
          </a>
        </li>
        <li>chapter 13 coming soon...</li>
      </ul>
    </Row>
  </Container>
);

export default LiPostsPage;

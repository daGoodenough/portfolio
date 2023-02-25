import { Col } from 'react-bootstrap';

import FadeIn from './FadeIn';
import learnBtcWallet from '../images/learn-btc-wallet-addr.png';

const FeaturedProject = () => (
  <>
    <FadeIn>
      <div className="text-center">
        <h2>Learn Bitcoin Wallet</h2>
        <h5>The wallet that helps you understand</h5>
      </div>
    </FadeIn>
    <Col className="d-flex align-items-center" md={6}>
      <FadeIn>
        <div className="featured-project">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          dicta! Obcaecati nostrum quod vitae doloribus eum possimus est hic
          sint quisquam! Natus magnam quam excepturi ipsam praesentium eos.
          Tempore,
        </div>
      </FadeIn>
    </Col>
    <Col className="" md={6}>
      <FadeIn>
        <img
          src={learnBtcWallet}
          alt="Learn Bitcoin Wallet Website"
          className="featured-project"
        />
      </FadeIn>
    </Col>
  </>
);

export default FeaturedProject;

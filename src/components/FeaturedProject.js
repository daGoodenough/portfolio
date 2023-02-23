import { Col } from 'react-bootstrap';

import learnBtcWallet from '../images/learn-btc-wallet-addr.png';

const FeaturedProject = () => (
  <>
    <Col md={5}>
      <div className="featured-project">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        dicta! Obcaecati nostrum quod vitae doloribus eum possimus est hic sint
        quisquam! Natus magnam quam excepturi ipsam praesentium eos. Tempore,
      </div>
    </Col>
    <Col md={7}>
      <img
        src={learnBtcWallet}
        alt="Learn Bitcoin Wallet Website"
        className="featured-project"
      />
    </Col>
  </>
);

export default FeaturedProject;

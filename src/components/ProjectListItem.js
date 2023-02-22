import { Col } from 'react-bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const ProjectListItem = ({ id }) => (
  <Col className="item" md={4} sm={12}>
    Title: {id}
    <img
      src="https://imgs.search.brave.com/v-UcEWZCKqp1WI4M1BYWoArPDx8vsrB1J1hZBXMRWls/rs:fit:898:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5G/MDBkQ2Y0Ylh4WDBK/LXFFRWY0cUlRSGFE/NiZwaWQ9QXBp"
      alt="placeholder"
    />
    <div>
      This is a description of the project that appear when the project is
      hovered over
    </div>
  </Col>
);

ProjectListItem.propTypes = {
  id: PropTypes.number,
};

export default ProjectListItem;

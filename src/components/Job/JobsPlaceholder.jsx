import { Col, Placeholder, Row } from "react-bootstrap";

const JobsPlaceholder = () => {
  return (
    <Row className="job w-100 align-items-start border-bottom border-bottom-secondary-subtle pb-3 mt-3">
      <Col lg={1}>
        <p aria-hidden="true" className="m-0" style={{ width: "40px", height: "19px" }}>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={12} size="lg" aria-hidden="true" bg="primary" />
          </Placeholder>
        </p>
        <p aria-hidden="true" className="m-0" style={{ width: "40px" }}>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={12} size="lg" aria-hidden="true" bg="primary" />
          </Placeholder>
        </p>
      </Col>
      <Col lg={8} className="ms-3 flex-grow-1">
        <Placeholder as="span" animation="glow">
          <Placeholder xs={8} size="md" bg="primary" />
        </Placeholder>
        <p aria-hidden="true" className="m-0" style={{ height: "14px" }}>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={3} size="xs" bg="dark" />
          </Placeholder>
        </p>
        <p aria-hidden="true" className="mb-1" style={{ height: "14px" }}>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={3} size="xs" bg="secondary" />
          </Placeholder>
        </p>
        <p aria-hidden="true" className="m-0" style={{ height: "14px" }}>
          <Placeholder as="span" animation="glow">
            <Placeholder xs={3} size="xs" bg="secondary" />
          </Placeholder>
        </p>
      </Col>
      <Col lg={2} className="justify-content-end text-end">
        <div
          className="job-icon rounded-5 text-end m-0 d-inline-block text-center align-middle"
          style={{ width: "30px", height: "30px" }}
        >
          <Placeholder as="span" animation="glow">
            <Placeholder xs={6} size="lg" aria-hidden="true" />
          </Placeholder>
        </div>
      </Col>
    </Row>
  );
};

export default JobsPlaceholder;

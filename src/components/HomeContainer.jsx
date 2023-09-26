import { Col, Container, Row } from "react-bootstrap";
import HomeCenter from "./HomeCenter";

const HomeContainer = () => {
  return (
    <Container fluid="md" className="mt-3" style={{ height: "100vh" }}>
      <Row>
        <Col xs={4} lg={3} style={{ height: "100vh" }} className=" d-none d-md-block"></Col>
        <Col style={{ height: "100vh" }}>
          <HomeCenter />
        </Col>
        <Col xs={5} lg={4} className="d-none d-lg-block " style={{ height: "100vh" }}></Col>
      </Row>
    </Container>
  );
};

export default HomeContainer;

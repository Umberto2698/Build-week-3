import { Col, Container, Row } from "react-bootstrap";
import HomeCenter from "./HomeCenter";

const HomeContainer = () => {
  return (
    <Container id="home-container" fluid="md" className="mt-3 pt-2">
      <Row>
        <Col xs={4} lg={3} className=" d-none d-md-block"></Col>
        <Col>
          <HomeCenter />
        </Col>
        <Col xs={5} lg={4} className="d-none d-lg-block "></Col>
      </Row>
    </Container>
  );
};

export default HomeContainer;

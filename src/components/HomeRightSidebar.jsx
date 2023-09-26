import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyFooter from "./MyFooter";

import Linkedin from "../assets/linkedin.png";

const HomeRightSidebar = () => {
  return (
    <Container fluid className="px-0">
      {/*  Topbar  */}

      <Container>
        <Row className="pt-4 gap-2">
          <Col className="bg-white rounded-3 p-1 border">
            <Col className="d-flex justify-content-between px-2 py-2 align-items-center">
              <h6 className="fw-bold m-0">Linkedin Notizie</h6>
            </Col>
            <Col>{/* notizie */}</Col>
          </Col>
          <img src={Linkedin} alt="error" width={40} height={40} />
          <Col className="bg-white rounded-3 p-1 my-3 border">
            <Col className="d-flex justify-content-end pe-2 align-items-center">
              <p className="fw-bold pt-2">Annuncio qui </p>
            </Col>
          </Col>
          {/* footer */}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeRightSidebar;

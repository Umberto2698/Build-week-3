import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="pt-4 pb-4 text-center text-lg-left">
      <Row>
        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">
                Informazioni
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Centro Assistenza
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Privacy e condizioni
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-dark">
                Accessibilità
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Privacy
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Opzioni per gli annunci pubblicitari
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Pubblicità
              </a>
            </li>
          </ul>
        </Col>

        <Col lg="3" md="6" className="mb-4 mb-md-0">
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-dark">
                Servizi per le azinde
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Scarica l'app LinkedIn
              </a>
            </li>
            <li>
              <a href="#!" className="text-dark">
                Altro
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <small>
        <a className="text-muted mt-4" href="#e">
          LinkedIn Corporation &copy; {new Date().getFullYear()} Copyright
        </a>
      </small>
    </Container>
  );
};
export default Footer;

import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { BookmarkFill, BellFill, Clipboard2Check, Youtube, GearFill, PencilSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React from "react";
import FooterLogo from "../assets/LinkedIn-Logos/LI-Logo.png";

const JobPage = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Link
        ref={ref}
        to="/"
        className="text-decoration-none text-reset mx-2 my-2"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        <span className="footer-text">{children} &#x25bc;</span>
      </Link>
    );
  });

  return (
    <Container>
      <Row>
        <Col lg={3} className="flex-column align-items-center justify-content-start">
          <div className="d-flex flex-column align-items-start justify-content-between p-3 mb-3 bg-white border border-secondary-subtle rounded-3">
            <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
              <BookmarkFill size={20}></BookmarkFill>
              <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Le mie offerte di lavoro</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
              <BellFill size={20}></BellFill>
              <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Avvisi offerte di lavoro</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
              <Clipboard2Check size={20}></Clipboard2Check>
              <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Valutazioni delle competenze</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
              <Youtube size={20}></Youtube>
              <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Indicazioni per chi cerca lavoro</span>
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
              <GearFill size={20}></GearFill>
              <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Impostatzioni candidatura</span>
            </div>
          </div>
          <div>
            <Button id="publishJob" variant="outline-primary light" size="lg" className="w-100">
              <div className="d-flex align-items-center justify-content-between">
                <PencilSquare size={20} className="fw-bold"></PencilSquare>
                <span className="text-center ms-1 px-3 fs-6 fw-medium flex-grow-1">Pubblica offerta gratuita</span>
              </div>
            </Button>
          </div>
        </Col>
        <Col></Col>
        <Col lg={3} className="d-flex flex-column justify-content-start align-items-center">
          <div className="mb-2">
            <div className="text-secondary text-center">
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Informazioni</span>
              </Link>
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Accessibilità</span>
              </Link>
            </div>
            <div className="text-secondary text-center">
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Centro assistenza</span>
              </Link>
              <Dropdown className="d-inline-block">
                <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle} className="footer-text">
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="rounded-start-3 bg-white border border-secondary-subtle"
                  style={{ borderRadius: "0" }}
                >
                  <Dropdown.Item className="fw-medium footer-dropdown" style={{ fontSize: "12px" }}>
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-medium footer-dropdown" style={{ fontSize: "12px" }}>
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-medium footer-dropdown" style={{ fontSize: "12px" }}>
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-medium footer-dropdown" style={{ fontSize: "12px" }}>
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-medium footer-dropdown" style={{ fontSize: "12px" }}>
                    Informativa sui copyright
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="text-secondary text-center">
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Opzioni per gli annunci pubblicitari</span>
              </Link>
            </div>
            <div className="text-secondary text-center">
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Pubblicità</span>
              </Link>
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Servizi alle aziende</span>
              </Link>
            </div>
            <div className="text-secondary text-center">
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Scarica l'app Linkedin</span>
              </Link>
              <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
                <span className="footer-text">Altro</span>
              </Link>
            </div>
          </div>
          <div>
            <img src={FooterLogo} alt="Logo" width={60} />
            <p className="d-inline-block ms-1" style={{ fontSize: "12px" }}>
              Linkedin Corporation &copy; 2023
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobPage;

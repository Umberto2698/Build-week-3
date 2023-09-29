import React from "react";
import { Col, Row, Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { QuestionCircleFill, GearFill, ShieldShaded } from "react-bootstrap-icons";

const Footer = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <Link
        ref={ref}
        to="/"
        className="text-decoration-none text-reset mx-2"
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
    <Row xs={3} lg={5} className="w-100 pb-3 pt-4 justify-content-between ">
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Informazioni</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Linee guida della community</span>
          </Link>
          <Dropdown className="d-inline-block mb-3">
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
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Sales solutions</span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Centro sicurezza</span>
          </Link>
        </div>
      </Col>
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2"
          >
            <span className="footer-text">Accessibilità </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Carriera </span>
          </Link>

          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 lh-sm mb-2"
          >
            <span className="footer-text">Opzioni per gli annunci pubblicitari </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Mobile </span>
          </Link>
        </div>
      </Col>
      <Col className="mb-3 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Talent Solutions </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Soluzioni di marketing </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 mb-3 "
          >
            <span className="footer-text">Pubblicità </span>
          </Link>
          <Link
            to="/"
            className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset mx-2 "
          >
            <span className="footer-text">Piccole imprese </span>
          </Link>
        </div>
      </Col>
      <Col className="flex-grow-1 flex-lg-grow-0 mb-5 mb-lg-0">
        <div className="d-flex flex-column align-items-start justify-content-start text-secondary ">
          <div className="d-flex align-items-start">
            <QuestionCircleFill className="text-dark" size={20}></QuestionCircleFill>
            <div className="d-flex flex-column align-items-start justify-content-start text-dark ms-2">
              <Link
                to="/"
                className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset    "
              >
                <span className="footer-text">Domande? </span>
              </Link>
              <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                Visita il nostro centro assistenza
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <GearFill className="text-dark" size={20}></GearFill>
            <div className="d-flex flex-column align-items-start justify-content-start text-dark ms-2">
              <Link
                to="/"
                className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset    "
              >
                <span className="footer-text">Gestisci il tuo account e la tua privacy </span>
              </Link>
              <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                Vai alle impostazioni
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <ShieldShaded className="text-dark" size={20}></ShieldShaded>
            <div className="d-flex flex-column align-items-start justify-content-start text-dark ms-2 ">
              <Link
                to="/"
                className="d-flex align-items-start justify-content-start mb-1 text-decoration-none text-reset   "
              >
                <span className="footer-text">Trasparenza sui contenuti consigliati </span>
              </Link>
              <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                Scopri di più sui contenuti consigliati
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col className="mb-5 mb-lg-0">
        <div className="d-flex flex-column align-items-start w-100 justify-content-start">
          <Form.Group className=" text-secondary w-100">
            <Form.Label className="m-0" style={{ fontSize: "12px" }}>
              Seleziona lingua
            </Form.Label>
            <Form.Select className="text-secondary" style={{ fontSize: "12px" }}>
              <option value="1">Italiano (Italiano)</option>
              <option value="2">English (Inglese)</option>
              <option value="3">Deutsch (Tedesco)</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Col>
    </Row>
  );
};
export default Footer;

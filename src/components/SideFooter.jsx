import { Link } from "react-router-dom";
import FooterLogo from "../assets/LinkedIn-Logos/LI-Logo.png";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Plus } from "react-bootstrap-icons";
import React from "react";

const Footer = () => {
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
    <>
      <div className="mb-2 mt-3">
        <div className="d-none d-lg-block text-secondary text-center">
          <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Informazioni</span>
          </Link>
          <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Accessibilità</span>
          </Link>
        </div>
        <div className="text-secondary text-center">
          <Link to="/" className="d-lg-none text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Informazioni</span>
          </Link>
          <Link to="/" className="d-lg-none text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Accessibilità</span>
          </Link>
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
        <div className="d-none d-lg-block text-secondary text-center">
          <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Opzioni per gli annunci pubblicitari</span>
          </Link>
        </div>
        <div className="text-secondary text-center">
          <Link to="/" className="d-lg-none text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Opzioni per gli annunci pubblicitari</span>
          </Link>
          <Link to="/" className="text-decoration-none text-reset mx-2 my-2">
            <span className="footer-text">Pubblicità</span>
          </Link>
          <Dropdown className="d-inline-block">
            <Dropdown.Toggle id="dropdown-custom-components" as={CustomToggle} className="footer-text">
              Servizi alle aziende
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="rounded-start-3 bg-white border border-secondary-subtle "
              style={{ borderRadius: "0" }}
            >
              <Dropdown.Item className="fw-medium footer-dropdown-2">
                <h6 className="m-0" style={{ fontSize: "13px" }}>
                  Impara con Linkedin
                </h6>
                <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                  Corsi per formare i tuoi dipendenti
                </p>
              </Dropdown.Item>
              <Dropdown.Item className="fw-medium footer-dropdown-2">
                <h6 className="m-0" style={{ fontSize: "13px" }}>
                  Centro amministrazione
                </h6>
                <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
                  Gestisci i dettagli di fatturazione e account
                </p>
              </Dropdown.Item>
              <Dropdown.Divider />
              <DropdownItem className="fw-medium footer-dropdown-2 d-flex align-items-center">
                <h6 className="m-0 d-inline-block" style={{ fontSize: "13px" }}>
                  Crea una pagina aziendale
                </h6>
                <Plus className="text-dark fw-bold" size={25}></Plus>
              </DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
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
    </>
  );
};

export default Footer;

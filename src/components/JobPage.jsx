import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import {
  BookmarkFill,
  BellFill,
  Clipboard2Check,
  Youtube,
  GearFill,
  PencilSquare,
  Plus,
  ArrowRight,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import FooterLogo from "../assets/LinkedIn-Logos/LI-Logo.png";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import { getRandomJobsAction } from "../redux/actions";

const JobPage = () => {
  const dispatch = useDispatch();
  const randomJobArray = useSelector((state) => state.job.random.content);

  useEffect(() => {
    dispatch(getRandomJobsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Col lg={6} className="flex-column align-items-center justify-content-start">
          <div className="d-flex flex-column align-items-center justify-content-between pt-3 mb-3 bg-white border border-secondary-subtle rounded-3">
            <div className="d-flex flex-column align-items-start w-100 mb-2 px-2">
              <h2 className="m-0" style={{ fontSize: "20px" }}>
                Consigliato per te
              </h2>
              <p className="m-0 text-secondary" style={{ fontSize: "13px" }}>
                Sulla base del tuo profilo e della tua cronologia di ricerche
              </p>
            </div>
            {randomJobArray.length !== 0 && randomJobArray.map((job) => <Jobs jobData={job} key={job._id}></Jobs>)}
            <div className="job-detail border-top border-top-secondary-subtle d-flex align-items-center justify-content-center py-3 w-100">
              <h4 className="m-0 d-inline-block text-secondary me-2" style={{ fontSize: "15px" }}>
                Mostra tutto
              </h4>
              <ArrowRight size={20}></ArrowRight>
            </div>
          </div>
        </Col>
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
        </Col>
      </Row>
    </Container>
  );
};

export default JobPage;

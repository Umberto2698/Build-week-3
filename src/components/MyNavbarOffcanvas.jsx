import {
  faAd,
  faBullseye,
  faCompass,
  faPeopleGroup,
  faPlay,
  faPlus,
  faSquarePollHorizontal,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarOffcanvas = ({ show, hide }) => {
  return (
    <Offcanvas
      id="navbar-offcanvas"
      className="rounded-start"
      style={{ border: "solid 1px #e5e5e5" }}
      show={show}
      placement="end"
      onHide={hide}
    >
      <Offcanvas.Header closeButton className="p-4">
        <Offcanvas.Title>Per le aziende</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-4 pt-2">
        <Container className="rounded-3 mb-2" style={{ border: "solid 1px #e5e5e5" }}>
          <Row>
            <h4 className="m-0 p-3 fs-6" style={{ borderBottom: "solid 1px #e5e5e5" }}>
              Scopri altri prodotti LinkedIn
            </h4>
          </Row>

          <Row className="text-secondary p-2">
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faAd} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Pubblica un'offerta di lavoro</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Learning</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faSquarePollHorizontal} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Talent Insights</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faBullseye} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Pubblicizza</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faCompass} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Vendi</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faPeopleGroup} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Gruppi</div>
              </Link>
            </Col>
            <Col xs={3} className="px-3 py-1 text-center mb-2">
              <Link to="" className="text-decoration-none">
                <div>
                  <div
                    className="p-2 rounded-1 m-auto"
                    style={{ border: "solid 1px #e5e5e5", width: "40px", height: "40px" }}
                  >
                    <FontAwesomeIcon icon={faUserCheck} />
                  </div>
                </div>
                <div className="my-navbar-text mt-2 text-secondary">Marketplace dei servizi</div>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="rounded-3" style={{ border: "solid 1px #e5e5e5" }}>
          <Row>
            <h4 className="m-0 p-3 fs-6" style={{ borderBottom: "solid 1px #e5e5e5" }}>
              Scopri altro per il business
            </h4>
          </Row>

          <Row className="p-3" style={{ borderBottom: "solid 1px #e5e5e5" }}>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Assumi su LinkedIn
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Trova, attrai e assumi
              </p>
            </Link>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Vendi con LinkedIn
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Costruisci relazioni con i buyer
              </p>
            </Link>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Offerta di lavoro gratuita
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Trova candidati di qualitá
              </p>
            </Link>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Fai pubblicitá su LinkedIn
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Acquisisci clienti e fai crescere la tua azienda
              </p>
            </Link>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Impara con LinkedIn
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Corsi per formare i tuoi dipendenti
              </p>
            </Link>
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="mb-0">
                Centro amministrazione
              </h6>
              <p id="offcanvas-text" className="text-secondary mb-2">
                Gestisci i dettagli di fatturazione e account
              </p>
            </Link>
          </Row>
          <Row className="p-3 ">
            <Link className="p-0" to="" id="offcanvas-link">
              <h6 id="offcanvas-title" className="m-0 p-0">
                Crea una pagina aziendale
                <span> </span>
                <FontAwesomeIcon icon={faPlus} />
              </h6>
            </Link>
          </Row>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NavbarOffcanvas;

import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilePageHeroSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dropdown, setDropdown] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <div className="main-section">
      <div id="user-banner">
        <i className="bi bi-camera-fill pp"></i>
        <div className="img-wrapper">
          <img
            src="https://cdn4.iconfinder.com/data/icons/wedding-thick-line-filled-colors/1000/340-Camera-256.png"
            alt="camera"
          />
        </div>
      </div>
      <div className=" px-4 pb-4 pt-3 m-0" style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-end">
          <i className="bi bi-pen pointer one" onClick={handleShow}></i>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica presentazione</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              padding: "8px 24px 16px",
              maxHeight: "725px",
              overflowY: "scroll",
            }}
          >
            <p style={{ fontSize: "12px", margin: "0" }}>
              * Indica che è obbligatorio
            </p>
            <Form className="pt-4">
              <div className="pb-4">
                <Form.Label className="my-label">Nome*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci il tuo nome"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">Cognome*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci il tuo cognome"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">Nome aggiuntivo</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci il tuo nome"
                  aria-describedby="basic-addon3"
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">
                  Inserisci pronomi personalizzati
                </Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="..."
                  aria-describedby="basic-addon3"
                />
                <Form.Label className="my-label">
                  Indica i pronomi di genere che vuoi che gli altri usino per
                  riferirsi a te.
                </Form.Label>
              </div>
              <div className="pb-5">
                <Form.Label className="my-label">Sommario*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci sommario"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <h5 className="m-0 pb-1">Posizione attuale</h5>
              <div className="pb-3">
                <Form.Label className="my-label">
                  Posizione lavorativa*
                </Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci la tua posizione lavorativa"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <div className="pb-5">
                <Form.Check
                  className="my-input-check"
                  label="Mostra l'azienda attuale nella mia presentazione"
                  aria-describedby="basic-addon3"
                />
              </div>
              <h5 className="m-0 pb-5">Formazione</h5>
              <h5 className="m-0 pb-1">Località</h5>
              <div className="pb-3">
                <Form.Label className="my-label">
                  Paese/Area geografica*
                </Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci il tuo paese"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <div className="pb-3">
                <Form.Label className="my-label">CAP*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci il CAP della tua città"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <div className="pb-5">
                <Form.Label className="my-label">Città*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Inserisci la tua città"
                  aria-describedby="basic-addon3"
                  required
                />
              </div>
              <h5 className="m-0 pb-1">Informazioni di contatto</h5>
              <div className="pb-3">
                <Form.Label className="my-label">
                  Aggiungi o modifica il tuo profilo URL, indirizzo email e
                  altro
                </Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="(da modificare questo input con un link)"
                  aria-describedby="basic-addon3"
                />
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Chiudi senza salvare
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Salva
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="align-items-center pt-2">
          <Col xs={8}>
            <h3>Angelo Moreno</h3>
          </Col>
          <Col xs={4} style={{ textAlign: "center" }}>
            <h6>Epicode</h6>
          </Col>
        </Row>
        <div>
          <p className="mt-2" style={{ color: "#9a9a9a" }}>
            Monza, Lombardia, Italia ·{" "}
            <Link className="link">Informazioni di contatto</Link>
          </p>
        </div>
        <div className="d-flex pt-3 py-1 gap-2">
          <Button
            size="sm"
            className="my-btn"
            onClick={() =>
              setDropdown({
                first: !dropdown.first,
                second: false,
                third: false,
              })
            }
          >
            Disponibile per
          </Button>
          {/* <div className="my-dropdown">
            <p>ciaooooo</p>
          </div> */}
          <Button
            size="sm"
            className="my-btn"
            onClick={() =>
              setDropdown({
                first: false,
                second: !dropdown.second,
                third: false,
              })
            }
          >
            Aggiungi sezioni del profilo
          </Button>
          <Button
            size="sm"
            className="my-btn"
            onClick={() =>
              setDropdown({
                first: false,
                second: false,
                third: !dropdown.third,
              })
            }
          >
            Altro
          </Button>
        </div>
        <div className="d-flex pt-4 cards-wrapper" style={{ gap: "14px" }}>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <i className="bi bi-pen pointer fw-bold"></i>
          </div>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <i class="bi bi-x-lg"></i>
          </div>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <i class="bi bi-x-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageHeroSection;

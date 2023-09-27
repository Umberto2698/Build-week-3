import { useState } from "react";
import AddSVG from "../Svgs/AddSVG";
import PenSVG from "../Svgs/PenSVG";
import { Button, Form, Modal } from "react-bootstrap";
import ArrowSVG from "../Svgs/ArrowSVG";

const Experience = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="horz-card-block">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          paddingInline: "24px",
          paddingTop: "18px",
        }}
      >
        <h3 style={{ fontSize: "20px" }}>Esperienza</h3>
        <div className="d-flex align-items-center gap-1">
          <span onClick={handleShow} className="SVG-click">
            <AddSVG />
          </span>
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
          <span className="SVG-click">
            <PenSVG />
          </span>
        </div>
      </div>
      <div
        className="d-flex flex-column"
        style={{
          paddingInline: "24px",
          paddingBlock: "12px",
        }}
      >
        <div className="d-flex  gap-2">
          <div className="d-flex flex-column">
            <h4 style={{ fontSize: "16px" }}>
              Non hai ancora pubblicato nulla
            </h4>
            <p style={{ fontSize: "14px" }}>
              Le esperienze che condividi appariranno qui
            </p>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center gap-1 show-more"
        style={{
          borderTop: "1px solid var(--mid-grey)",
          paddingBlock: "12px",
          color: "var(--grey)",
        }}
      >
        <span style={{ fontWeight: 600 }}> Mostra tutte le esperienze </span>{" "}
        <ArrowSVG />
      </div>
    </div>
  );
};

export default Experience;

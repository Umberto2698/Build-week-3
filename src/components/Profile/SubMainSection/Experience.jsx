import { useState } from "react";
import AddSVG from "../Svgs/AddSVG";
import PenSVG from "../Svgs/PenSVG";
import { Button, Form, Modal } from "react-bootstrap";
import ArrowSVG from "../Svgs/ArrowSVG";
import { Link } from "react-router-dom";
import XsAddSVG from "../Svgs/XsAddSVG";

const Experience = () => {
  const [show, setShow] = useState(false);
  // const [isWorking, setIsWorking] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const arrMonths = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const arrYears = [];

  for (let i = 0; i < 2024; i++) {
    if (i >= 1923) {
      arrYears.push(i);
    }
  }

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
              <Modal.Title>Aggiungi esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ padding: "0", maxHeight: "725px", overflowY: "scroll" }}
            >
              <div
                style={{
                  backgroundColor: "#EAF3F7",
                  padding: "16px 24px",
                  fontSize: "14px",
                }}
              >
                <p style={{ fontWeight: "600", margin: "0" }}>
                  Informa la rete
                </p>
                <div className="d-flex align-items-start">
                  <p
                    className="flex-grow-1 pe-3 m-0"
                    style={{ color: "var(--grey)" }}
                  >
                    Attiva l'opzione per informare la tua rete delle principali
                    modifiche al profilo (ad esempio un nuovo lavoro) e degli
                    anniversari lavorativi. Gli aggiornamenti possono richiedere
                    fino a 2 ore. Scopri di più sulla{"  "}
                    <Link
                      to="https://www.linkedin.com/help/linkedin/answer/a529062?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_position%3BtdPngjXDRJCEEu2TlGBp6Q%3D%3D"
                      target="_blank"
                      style={{ fontWeight: "600" }}
                    >
                      condivisione delle modifiche del profilo.
                    </Link>
                  </p>
                  <div
                    id="switch-wrapper"
                    className="d-flex align-items-center"
                  >
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "16px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    margin: "0",
                    color: "var(--grey)",
                  }}
                >
                  * Indica che è obbligatorio
                </p>
                <Form className="pt-4">
                  <div className="pb-4">
                    <Form.Label className="my-label">Qualifica*</Form.Label>
                    <Form.Control
                      className="my-input-control"
                      placeholder="Esempio: Retail Sales Manager"
                      aria-describedby="basic-addon3"
                      required
                    />
                  </div>
                  <div className="pb-4">
                    <Form.Label className="my-label">
                      Tipologia di impiego
                    </Form.Label>
                    <Form.Control
                      className="my-input-control"
                      placeholder="Inserisci il tuo cognome"
                      aria-describedby="basic-addon3"
                    />
                    <Form.Label
                      className="my-label mt-2"
                      style={{ fontSize: "16px" }}
                    >
                      Scopri di più sui{" "}
                      <Link
                        to={
                          "https://www.linkedin.com/help/linkedin/answer/a549563?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_position%3BtdPngjXDRJCEEu2TlGBp6Q%3D%3D"
                        }
                        target="_blank"
                      >
                        tipi di impiego
                      </Link>
                    </Form.Label>
                  </div>
                  <div className="pb-4">
                    <Form.Label className="my-label">Nome azienda*</Form.Label>
                    <Form.Control
                      className="my-input-control"
                      placeholder="Esempio: Microsoft"
                      aria-describedby="basic-addon3"
                      required
                    />
                  </div>
                  <div className="pb-4">
                    <Form.Label className="my-label">Località</Form.Label>
                    <Form.Control
                      className="my-input-control"
                      placeholder="Esempio: Milano, Italia"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                  <div className="pb-4">
                    <Form.Label className="my-label">
                      Tipologia di località
                    </Form.Label>
                    <Form.Select className="my-input-control">
                      <option>In sede</option>
                      <option>Da remoto</option>
                      <option>Ibrida</option>
                    </Form.Select>
                    <Form.Label className="my-label">
                      Scegli un tipo di località (es. da remoto)
                    </Form.Label>
                  </div>
                  <div className="pb-4">
                    <Form.Check
                      className="my-input-check"
                      label="Attualmente ricopro questo ruolo"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                  <div className="pb-4">
                    <Form.Label className="my-label">
                      Data di inizio*
                    </Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Select className="my-input-control" required>
                        <option>Mese</option>
                        {arrMonths.map((e) => (
                          <option key={`month-${e}`}>{e}</option>
                        ))}
                      </Form.Select>
                      <Form.Select className="my-input-control" required>
                        <option>Anno</option>
                        {arrYears.reverse().map((i) => (
                          <option key={`year-${i}`}>{i}</option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="pb-4">
                      <Form.Label className="my-label">
                        Data di fine*
                      </Form.Label>
                      <div className="d-flex gap-2">
                        <Form.Select className="my-input-control" required>
                          <option>Mese</option>
                          {arrMonths.map((e) => (
                            <option key={`month-${e}`}>{e}</option>
                          ))}
                        </Form.Select>
                        <Form.Select className="my-input-control" required>
                          <option>Anno</option>
                          {arrYears.reverse().map((i) => (
                            <option key={`year-${i}`}>{i}</option>
                          ))}
                        </Form.Select>
                      </div>
                    </div>
                    <div>
                      <Form.Label className="my-label">
                        Descrizione (max 2000)
                      </Form.Label>
                      <Form.Control
                        maxLength="2000"
                        as="textarea"
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                  </div>

                  <h5 className="m-0 pb-1">Competenze</h5>
                  <div style={{ paddingBottom: "30px" }}>
                    <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                      Oltre il 50% delle aziende su LinkedIn usa i dati sulle
                      competenze per coprire le posizioni aperte
                    </p>
                    <Button size="sm" className="my-btn">
                      <div className="d-flex align-items-center gap-1">
                        <XsAddSVG /> Aggiungi competenza
                      </div>
                    </Button>
                  </div>

                  <h5 className="m-0 pb-1">Media</h5>
                  <div>
                    <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                      Aggiungi contenuti multimediali come immagini, documenti,
                      siti o presentazioni. Scopri di più sui {"  "}
                      <Link
                        to={
                          "https://www.linkedin.com/help/linkedin/answer/a1516731?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_position%3Bm0emWd%2BMR8GVhWRjePUDjw%3D%3D"
                        }
                        target="_blank"
                        style={{ fontWeight: "600" }}
                      >
                        tipi di file multimediali supportati
                      </Link>
                    </p>
                    <Button size="sm" className="my-btn">
                      <div className="d-flex align-items-center gap-1">
                        <XsAddSVG /> Aggiungi media
                      </div>
                    </Button>
                  </div>
                </Form>
              </div>
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

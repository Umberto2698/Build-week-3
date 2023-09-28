import { useEffect, useState } from "react";
import AddSVG from "../Svgs/AddSVG";
import PenSVG from "../Svgs/PenSVG";
import { Button, Form, Modal } from "react-bootstrap";
import ArrowSVG from "../Svgs/ArrowSVG";
import { Link, useParams } from "react-router-dom";
import XsAddSVG from "../Svgs/XsAddSVG";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyExperienceAction,
  modifyMyExperienceAction,
} from "../../../redux/actions";
import SingleExperience from "./SingleExperience";

const Experience = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const experience = useSelector((state) => state.profiles.experience);
  const params = useParams();
  const [show, setShow] = useState(false);
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

  const arrYearsInv = [];
  for (let i = 0; i < 2024; i++) {
    if (i >= 1923) {
      arrYearsInv.push(i);
    }
  }
  const arrYears = arrYearsInv.reverse();

  const [startDate, setStartDate] = useState({
    mese: "",
    anno: "",
  });

  const [endDate, setEndDate] = useState({
    mese: "",
    anno: "",
  });

  const [query, setQuery] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "", // could be null
    description: "",
    area: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(startDate.mese, typeof startDate.mese);
    console.log(startDate.anno, typeof startDate.anno);
    const inizio = new Date(`${startDate.anno} ${startDate.mese} 1`);
    const fine = new Date(`${endDate.anno} ${endDate.mese} 1`);
    setQuery({
      ...query,
      startDate: inizio,
      endDate: fine,
    });
  };

  useEffect(() => {
    if (query.startDate !== "") {
      dispatch(modifyMyExperienceAction(myProfile._id, query));
      setQuery({
        role: "",
        company: "",
        startDate: "",
        endDate: "", // could be null
        description: "",
        area: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    dispatch(getMyExperienceAction(myProfile._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {!params.id && (
          <div className="d-flex align-items-center gap-1">
            <span onClick={handleShow} className="SVG-click">
              <AddSVG />
            </span>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Aggiungi esperienza</Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{
                  padding: "0",
                  maxHeight: "725px",
                  overflowY: "scroll",
                }}
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
                      Attiva l'opzione per informare la tua rete delle
                      principali modifiche al profilo (ad esempio un nuovo
                      lavoro) e degli anniversari lavorativi. Gli aggiornamenti
                      possono richiedere fino a 2 ore. Scopri di più sulla{"  "}
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
                  <Form
                    className="pt-4 d-flex flex-column"
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <div className="pb-4">
                        <Form.Label className="my-label">Qualifica*</Form.Label>
                        <Form.Control
                          className="my-input-control"
                          placeholder="Esempio: Retail Sales Manager"
                          aria-describedby="basic-addon3"
                          value={query.role}
                          onChange={(e) =>
                            setQuery({ ...query, role: e.target.value })
                          }
                          required
                        />
                      </div>
                      {/* <div className="pb-4">
                        <Form.Label className="my-label">
                          Tipologia di impiego
                        </Form.Label>
                        <Form.Control
                          className="my-input-control"
                          placeholder="Inserisci la tipologia di impiego"
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
                      </div> */}
                      <div className="pb-4">
                        <Form.Label className="my-label">
                          Nome azienda*
                        </Form.Label>
                        <Form.Control
                          className="my-input-control"
                          placeholder="Esempio: Microsoft"
                          aria-describedby="basic-addon3"
                          value={query.company}
                          onChange={(e) =>
                            setQuery({ ...query, company: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="pb-4">
                        <Form.Label className="my-label">Località*</Form.Label>
                        <Form.Control
                          className="my-input-control"
                          placeholder="Esempio: Milano, Italia"
                          aria-describedby="basic-addon3"
                          value={query.area}
                          onChange={(e) =>
                            setQuery({ ...query, area: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="pb-4">
                        <Form.Label className="my-label">
                          Tipologia di località
                        </Form.Label>
                        <Form.Select className="my-input-control">
                          <option>Seleziona tipologia di località</option>
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
                          <Form.Select
                            className="my-input-control"
                            required
                            onChange={(e) =>
                              setStartDate({
                                ...startDate,
                                mese: e.target.value,
                              })
                            }
                          >
                            <option>Mese</option>
                            {arrMonths.map((e, i) => (
                              <option key={`month-${e}`} value={i + 1}>
                                {e}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Select
                            className="my-input-control"
                            required
                            onChange={(e) =>
                              setStartDate({
                                ...startDate,
                                anno: e.target.value,
                              })
                            }
                          >
                            <option>Anno</option>
                            {arrYears.map((i) => (
                              <option key={`year-${i}`} value={i}>
                                {i}
                              </option>
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
                            <Form.Select
                              className="my-input-control"
                              required
                              onChange={(e) =>
                                setEndDate({
                                  ...endDate,
                                  mese: e.target.value,
                                })
                              }
                            >
                              <option>Mese</option>
                              {arrMonths.map((e, i) => (
                                <option key={`month-${e}`} value={i + 1}>
                                  {e}
                                </option>
                              ))}
                            </Form.Select>
                            <Form.Select
                              className="my-input-control"
                              required
                              onChange={(e) =>
                                setEndDate({
                                  ...endDate,
                                  anno: e.target.value,
                                })
                              }
                            >
                              <option>Anno</option>
                              {arrYears.map((i) => (
                                <option key={`year-${i}`} value={i}>
                                  {i}
                                </option>
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
                            value={query.description}
                            onChange={(e) =>
                              setQuery({
                                ...query,
                                description: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <h5 className="m-0 pb-1">Competenze</h5>
                      <div style={{ paddingBottom: "30px" }}>
                        <p style={{ fontSize: "14px", marginBottom: "12px" }}>
                          Oltre il 50% delle aziende su LinkedIn usa i dati
                          sulle competenze per coprire le posizioni aperte
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
                          Aggiungi contenuti multimediali come immagini,
                          documenti, siti o presentazioni. Scopri di più sui{" "}
                          {"  "}
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
                    </div>
                    <Button
                      variant="primary"
                      onClick={handleClose}
                      type="submit"
                      style={{ alignSelf: "flex-end" }}
                    >
                      Salva
                    </Button>
                  </Form>
                </div>
              </Modal.Body>
              {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Chiudi senza salvare
                </Button>
                
              </Modal.Footer> */}
            </Modal>
            <span className="SVG-click">
              <PenSVG />
            </span>
          </div>
        )}
      </div>
      <div
        className="d-flex flex-column"
        style={{
          paddingInline: "24px",
          paddingBlock: "12px",
        }}
      >
        {experience.length === 0 ? (
          <div className="d-flex gap-2">
            <div className="d-flex flex-column">
              <h4 style={{ fontSize: "16px" }}>
                Non hai ancora pubblicato nulla
              </h4>
              <p style={{ fontSize: "14px" }}>
                Le esperienze che condividi appariranno qui
              </p>
            </div>
          </div>
        ) : (
          <>
            {console.log("experience", experience)}
            {experience.map((elem) => (
              <SingleExperience key={`experience-${elem._id}`} exp={elem} />
            ))}
          </>
        )}
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

import { useDispatch, useSelector } from "react-redux";
import SingleExperience from "./SingleExperience";
import { Button, Form, Modal } from "react-bootstrap";
import {
  deleteMyExperienceAction,
  modifyMyExperienceAction,
  putMyExperienceAction,
} from "../../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import XsAddSVG from "../Svgs/XsAddSVG";

const PutDeleteExperience = () => {
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.profiles.experience);
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (expId) => {
    const confirmation = window.confirm(
      "Sei sicuro di voler eliminare questa esperienza?"
    );
    if (confirmation) {
      dispatch(deleteMyExperienceAction(myProfile._id, expId));
    }
  };

  const [query, setQuery] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "", // could be null
    description: "",
    area: "",
  });

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

  const [date, setDate] = useState({
    startDate: {
      mese: "",
      anno: "",
    },
    endDate: {
      mese: "",
      anno: "",
    },
  });

  const handlePut = (expId) => {
    const confirmation = window.confirm(
      "Sei sicuro di modificare questa esperienza?"
    );
    if (confirmation) {
      dispatch(putMyExperienceAction(myProfile._id, expId, query));
    }
  };

  //   const handlePut = (expId, index) => {
  //     const confirmation = window.confirm(
  //       "Sei sicuro di modificare questa esperienza?"
  //     );
  //     if (confirmation) {
  //       dispatch(putMyExperienceAction(myProfile._id, expId, query, index));
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inizio = new Date(`${date.startDate.anno} ${date.startDate.mese} 1`);
    const fine = new Date(`${date.endDate.anno} ${date.endDate.mese} 1`);
    setQuery({
      ...query,
      startDate: inizio,
      endDate: fine,
    });
  };

  useEffect(() => {
    if (query.startDate !== "") {
      const startDateMeseAnno = new Date(`${query.startDate}`);
      const startDateMese = startDateMeseAnno.getMonth();
      const startDateAnno = startDateMeseAnno.getFullYear();
      const endDateMeseAnno = new Date(`${query.endDate}`);
      const endDateMese = endDateMeseAnno.getMonth();
      const endDateAnno = endDateMeseAnno.getFullYear();
      setDate({
        startDate: {
          mese: startDateMese + 1,
          anno: startDateAnno,
        },
        endDate: {
          mese: endDateMese + 1,
          anno: endDateAnno,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="horz-card-block gap-2" style={{ marginTop: "70px" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          paddingInline: "24px",
          paddingTop: "18px",
        }}
      >
        <h3 style={{ fontSize: "24px" }}>Esperienze</h3>
        {/* <div className="d-flex align-items-center gap-1">
          <span className="SVG-click">
            <AddSVG />
          </span>
          <span className="SVG-click">
            <PenSVG />
          </span>
        </div> */}
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
          <div className="d-flex flex-column gap-4">
            {experience.map((elem) => (
              <div
                key={`experience-${elem._id}`}
                className="d-flex justify-content-between "
              >
                <SingleExperience exp={elem} />
                <div className="d-flex gap-3 align-items-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleShow();
                      setQuery({
                        role: elem.role,
                        company: elem.company,
                        startDate: elem.startDate,
                        endDate: elem.endDate, // could be null
                        description: elem.description,
                        area: elem.area,
                      });
                    }}
                  >
                    {console.log("query", query)}
                    {console.log("date", date)}
                    Modifica
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modifica esperienza</Modal.Title>
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
                            lavoro) e degli anniversari lavorativi. Gli
                            aggiornamenti possono richiedere fino a 2 ore.
                            Scopri di più sulla{"  "}
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
                              <Form.Label className="my-label">
                                Qualifica*
                              </Form.Label>
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
                                  setQuery({
                                    ...query,
                                    company: e.target.value,
                                  })
                                }
                                required
                              />
                            </div>
                            <div className="pb-4">
                              <Form.Label className="my-label">
                                Località*
                              </Form.Label>
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
                                  value={date.startDate.mese}
                                  onChange={(e) =>
                                    setDate({
                                      ...date,
                                      startDate: {
                                        ...date.startDate,
                                        mese: e.target.value,
                                      },
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
                                  value={date.startDate.anno}
                                  onChange={(e) =>
                                    setDate({
                                      ...date,
                                      startDate: {
                                        ...date.startDate,
                                        anno: e.target.value,
                                      },
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
                                    value={date.endDate.mese}
                                    onChange={(e) =>
                                      setDate({
                                        ...date,
                                        endDate: {
                                          ...date.endDate,
                                          mese: e.target.value,
                                        },
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
                                    value={date.endDate.anno}
                                    onChange={(e) =>
                                      setDate({
                                        ...date,
                                        endDate: {
                                          ...date.endDate,
                                          anno: e.target.value,
                                        },
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
                              <p
                                style={{
                                  fontSize: "14px",
                                  marginBottom: "12px",
                                }}
                              >
                                Oltre il 50% delle aziende su LinkedIn usa i
                                dati sulle competenze per coprire le posizioni
                                aperte
                              </p>
                              <Button size="sm" className="my-btn">
                                <div className="d-flex align-items-center gap-1">
                                  <XsAddSVG /> Aggiungi competenza
                                </div>
                              </Button>
                            </div>

                            <h5 className="m-0 pb-1">Media</h5>
                            <div>
                              <p
                                style={{
                                  fontSize: "14px",
                                  marginBottom: "12px",
                                }}
                              >
                                Aggiungi contenuti multimediali come immagini,
                                documenti, siti o presentazioni. Scopri di più
                                sui {"  "}
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
                            onClick={() => handlePut(elem._id)}
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
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(elem._id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PutDeleteExperience;

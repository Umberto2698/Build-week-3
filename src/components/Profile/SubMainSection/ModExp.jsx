import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import XsAddSVG from "../Svgs/XsAddSVG";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyExperienceAction, getSpecificExperienceAction, putMyExperienceAction } from "../../../redux/actions";

const ModExp = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const modExperience = useSelector((state) => state.profiles.modExperience);

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

  const [query, setQuery] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "", // could be null
    description: "",
    area: "",
  });

  const handlePut = (expId) => {
    console.log("expId", expId);
    const confirmation = window.confirm("Sei sicuro di modificare questa esperienza?");
    if (confirmation) {
      dispatch(putMyExperienceAction(myProfile._id, expId, query));
      dispatch(getMyExperienceAction(myProfile._id));
      navigate("/profile");
    }
  };

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

  const riempi = () => {
    setQuery({
      role: modExperience.role,
      company: modExperience.company,
      startDate: modExperience.startDate,
      endDate: modExperience.endDate, // could be null
      description: modExperience.description,
      area: modExperience.area,
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

  useEffect(() => {
    dispatch(getSpecificExperienceAction(myProfile._id, params.id));
  }, []);

  return (
    <>
      <div className="horz-card-block gap-2" style={{ marginTop: "70px" }}>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            paddingInline: "24px",
            paddingTop: "18px",
          }}
        >
          <h3 style={{ fontSize: "24px" }}>Esperienze</h3>
          <Button size="sm" className="my-btn" onClick={riempi}>
            Inizializza il form
          </Button>
        </div>
        <div
          className="d-flex flex-column"
          style={{
            paddingInline: "24px",
            paddingBlock: "12px",
          }}
        >
          <Form className="pt-4 d-flex flex-column" onSubmit={handleSubmit}>
            <div>
              <div className="pb-4">
                <Form.Label className="my-label">Qualifica*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Esempio: Retail Sales Manager"
                  aria-describedby="basic-addon3"
                  value={query.role}
                  onChange={(e) => setQuery({ ...query, role: e.target.value })}
                  required
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">Nome azienda*</Form.Label>
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
                <Form.Label className="my-label">Località*</Form.Label>
                <Form.Control
                  className="my-input-control"
                  placeholder="Esempio: Milano, Italia"
                  aria-describedby="basic-addon3"
                  value={query.area}
                  onChange={(e) => setQuery({ ...query, area: e.target.value })}
                  required
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">Tipologia di località</Form.Label>
                <Form.Select className="my-input-control">
                  <option>Seleziona tipologia di località</option>
                  <option>In sede</option>
                  <option>Da remoto</option>
                  <option>Ibrida</option>
                </Form.Select>
                <Form.Label className="my-label">Scegli un tipo di località (es. da remoto)</Form.Label>
              </div>
              <div className="pb-4">
                <Form.Check
                  className="my-input-check"
                  label="Attualmente ricopro questo ruolo"
                  aria-describedby="basic-addon3"
                />
              </div>
              <div className="pb-4">
                <Form.Label className="my-label">Data di inizio*</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Select
                    className="my-input-control"
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
                    required
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
                    required
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
                  <Form.Label className="my-label">Data di fine*</Form.Label>
                  <div className="d-flex gap-2">
                    <Form.Select
                      className="my-input-control"
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
                      required
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
                      required
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
                  <Form.Label className="my-label">Descrizione (max 2000)</Form.Label>
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
                  Oltre il 50% delle aziende su LinkedIn usa i dati sulle competenze per coprire le posizioni aperte
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
                  Aggiungi contenuti multimediali come immagini, documenti, siti o presentazioni. Scopri di più sui{" "}
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
              onClick={() => {
                handlePut(params.id);
              }}
              type="submit"
              style={{ alignSelf: "flex-end" }}
            >
              Salva
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ModExp;

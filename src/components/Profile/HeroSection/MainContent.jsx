import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PenSVG from "../Svgs/PenSVG";
import XsPenSVG from "../Svgs/XsPenSVG";
import CloseSVG from "../Svgs/CloseSVG";
import { ISLOADING_USER_PROFILES_TRUE, modifyUserProfileAction } from "../../../redux/actions";

const MainContent = () => {
  const dispatch = useDispatch();
  const currentProfile = useSelector((state) => state.profiles.currentProfile);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();

  const [query, setQuery] = useState({
    name: currentProfile.name,
    surname: currentProfile.surname,
    username: currentProfile.username,
    area: currentProfile.area,
    bio: currentProfile.bio,
    title: currentProfile.title,
  });

  // const [dropdown, setDropdown] = useState({
  //   first: false,
  //   second: false,
  //   third: false,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: ISLOADING_USER_PROFILES_TRUE });
    dispatch(modifyUserProfileAction(query));
  };

  return (
    <div className=" px-4 pb-4 pt-3 m-0" style={{ backgroundColor: "white" }}>
      {!params.id ? (
        <div className="d-flex justify-content-end">
          <span
            onClick={handleShow}
            className="SVG-click"
            style={!params.id ? { display: "inline-block" } : { display: "hiden" }}
          >
            <PenSVG />
          </span>
        </div>
      ) : (
        <div style={{ height: "40px" }}></div>
      )}

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
          <p style={{ fontSize: "12px", margin: "0" }}>* Indica che è obbligatorio</p>
          <Form className="pt-4" onSubmit={handleSubmit}>
            <div className="pb-4">
              <Form.Label className="my-label">Nome*</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci il tuo nome"
                aria-describedby="basic-addon3"
                value={query.name}
                onChange={(e) => setQuery({ ...query, name: e.target.value })}
                required
              />
            </div>
            <div className="pb-4">
              <Form.Label className="my-label">Cognome*</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci il tuo cognome"
                aria-describedby="basic-addon3"
                value={query.surname}
                onChange={(e) => setQuery({ ...query, surname: e.target.value })}
                required
              />
            </div>
            <div className="pb-4">
              <Form.Label className="my-label">Username*</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci il tuo nome"
                aria-describedby="basic-addon3"
                value={query.username}
                onChange={(e) => setQuery({ ...query, username: e.target.value })}
                required
              />
            </div>
            <div className="pb-4">
              <Form.Label className="my-label">Bio</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci la tua bio"
                aria-describedby="basic-addon3"
                value={query.bio}
                onChange={(e) => setQuery({ ...query, bio: e.target.value })}
              />
            </div>
            <h5 className="m-0 pb-1">Posizione attuale</h5>
            <div className="pb-4">
              <Form.Label className="my-label">Posizione lavorativa*</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci la tua posizione lavorativa"
                aria-describedby="basic-addon3"
                value={query.title}
                onChange={(e) => setQuery({ ...query, title: e.target.value })}
                required
              />
            </div>
            <h5 className="m-0 pb-1">Località</h5>
            <div className="pb-1">
              <Form.Label className="my-label">Paese/Area geografica*</Form.Label>
              <Form.Control
                className="my-input-control"
                placeholder="Inserisci il tuo paese"
                aria-describedby="basic-addon3"
                value={query.area}
                onChange={(e) => setQuery({ ...query, area: e.target.value })}
                required
              />
            </div>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Salva
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Row className="align-items-center pt-2">
        <Col xs={8}>
          <h3>
            {currentProfile.name} {currentProfile.surname}
          </h3>
        </Col>
        <Col xs={4} style={{ textAlign: "center" }}>
          <h6>{currentProfile.title}</h6>
        </Col>
      </Row>
      <div>
        <p className="mt-2" style={{ color: "#9a9a9a" }}>
          {currentProfile.area} · <Link className="link">Informazioni di contatto</Link>
        </p>
      </div>
      {!params.id && (
        <div className="d-flex pt-3 py-1 gap-2">
          <Button
            size="sm"
            className="my-btn"
            // onClick={() =>
            //   setDropdown({
            //     first: !dropdown.first,
            //     second: false,
            //     third: false,
            //   })
            // }
          >
            Disponibile per
          </Button>
          {/* <div className="my-dropdown">
            <p>ciaooooo</p>
          </div> */}
          <Button
            size="sm"
            className="my-btn"
            // onClick={() =>
            //   setDropdown({
            //     first: false,
            //     second: !dropdown.second,
            //     third: false,
            //   })
            // }
          >
            Aggiungi sezioni del profilo
          </Button>
          <Button
            size="sm"
            className="my-btn"
            // onClick={() =>
            //   setDropdown({
            //     first: false,
            //     second: false,
            //     third: !dropdown.third,
            //   })
            // }
          >
            Altro
          </Button>
        </div>
      )}

      {!params.id && (
        <div className="d-flex pt-4 cards-wrapper" style={{ gap: "14px" }}>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <XsPenSVG />
          </div>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <CloseSVG />
          </div>
          <div className="card-user-info">
            <div>
              <p style={{ fontWeight: "600" }}>Disponibile a lavorare</p>
              <p>Ruoli di Ingegnere Full Stack</p>
              <Link className="link">Mostra dettagli</Link>
            </div>
            <CloseSVG />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;

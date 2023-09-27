import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserBanner = () => {
  const currentProfile = useSelector((state) => state.profiles.currentProfile);
  const params = useParams();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div id="user-banner">
      {!params.id && <i className="bi bi-camera-fill pp"></i>}
      {!params.id ? (
        <div className="img-wrapper">
          <Image src={currentProfile.image} alt="img-profile" fluid />
          {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica l'immagine del profilo</Modal.Title>
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
                onChange={(e) =>
                  setQuery({ ...query, surname: e.target.value })
                }
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
                onChange={(e) =>
                  setQuery({ ...query, username: e.target.value })
                }
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
              <Form.Label className="my-label">
                Posizione lavorativa*
              </Form.Label>
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
              <Form.Label className="my-label">
                Paese/Area geografica*
              </Form.Label>
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
      </Modal> */}
        </div>
      ) : (
        <div className="img-wrapper">
          <Image src={currentProfile.image} alt="img-profile" fluid />
        </div>
      )}
    </div>
  );
};

export default UserBanner;

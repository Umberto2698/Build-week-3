import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfilePageMainSection = () => {
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
      <div
        className=" px-4 user-info py-4 m-0"
        style={{ backgroundColor: "white" }}
      >
        <div className="d-flex justify-content-end">
          <i className="bi bi-pen pointer one"></i>
        </div>
        <Row className="align-items-center">
          <Col xs={8}>
            <h3>Angelo Moreno</h3>
          </Col>
          <Col xs={4}>
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
          <Button size="sm" className="my-btn">
            Disponibile per
          </Button>
          <Button size="sm" className="my-btn">
            Aggiungi sezioni del profilo
          </Button>
          <Button size="sm" className="my-btn">
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

export default ProfilePageMainSection;

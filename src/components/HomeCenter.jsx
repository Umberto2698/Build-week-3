import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillCalendar2WeekFill, BsImage, BsJustifyRight } from "react-icons/bs";

const HomeCenter = () => {
  return (
    <>
      <Row className="bg-white p-2 px-3 rounded-2 " style={{ border: "1px solid #DFDEDA" }}>
        <div className="d-flex p-0 mb-2 mt-1">
          <div>
            <Link to="/profile">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
                alt="user"
                width={48}
                height={48}
                className="me-2 rounded-circle"
              />
            </Link>
          </div>
          <div className="flex-grow-1">
            <Button
              className="rounded-pill text-start text-secondary "
              style={{
                width: "100%",
                border: "1px solid #DFDEDA",
                backgroundColor: "transparent",
                fontSize: "0.8rem",
                height: "100%",
              }}
            >
              Avvia un post
            </Button>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-around p-0">
          <div id="home-center-btn-container">
            <Button id="home-center-btn" className="text-secondary border-0 d-flex align-items-center p-3">
              <BsImage className="text-primary" />
              <span className="ms-2" style={{ fontSize: "0.8rem" }}>
                Contenuti multimediali
              </span>
            </Button>
          </div>
          <div id="home-center-btn-container">
            <Button id="home-center-btn" className="text-secondary border-0 d-flex align-items-center p-3">
              <BsFillCalendar2WeekFill style={{ color: "#C37D16" }} />
              <span className="ms-2" style={{ fontSize: "0.8rem" }}>
                Evento
              </span>
            </Button>
          </div>
          <div id="home-center-btn-container">
            <Button id="home-center-btn" className="text-secondary border-0 d-flex align-items-center p-3">
              <BsJustifyRight style={{ color: "#E06847" }} />
              <span className="ms-2" style={{ fontSize: "0.8rem" }}>
                Scrivi un articolo
              </span>
            </Button>
          </div>
        </div>
      </Row>
    </>
  );
};

export default HomeCenter;

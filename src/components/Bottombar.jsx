import { Col, Container, Navbar, Row } from "react-bootstrap";

import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBriefcase, faHouse, faSquarePlus, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const BottomBar = () => {
  const location = useLocation();
  // const user = useSelector((state) => state.user.content);

  return (
    <>
      <Navbar fixed="bottom" expand="lg" style={{ height: "53px", zIndex: "10" }} className="bg-white p-0">
        <Container fluid="xl" style={{ height: "100%" }}>
          <Row className="flex-grow-1 " style={{ height: "100%" }}>
            <Col xs={10} lg={7} className="d-flex align-items-center flex-grow-1">
              <Row className="flex-grow-1" style={{ height: "100%" }}>
                <Col style={{ height: "100%" }}>
                  <Link
                    to="/"
                    className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                      location.pathname === "/" ? "text-black" : ""
                    }`}
                    style={{ color: "#8d8d8d", height: "100%" }}
                  >
                    <FontAwesomeIcon icon={faHouse} style={{ height: "20px" }} />
                    <span> Home</span>
                  </Link>
                </Col>
                <Col style={{ height: "100%" }}>
                  <Link
                    to="/mynetwork"
                    className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                      location.pathname === "/mynetwork" ? "text-black" : ""
                    }`}
                    style={{ color: "#8d8d8d", height: "100%" }}
                  >
                    <FontAwesomeIcon icon={faUserGroup} style={{ height: "20px" }} />
                    <span>Rete</span>
                  </Link>
                </Col>
                <Col style={{ height: "100%" }}>
                  <Link
                    to="/publish"
                    className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                      location.pathname === "/publish" ? "text-black" : ""
                    }`}
                    style={{ color: "#8d8d8d", height: "100%" }}
                  >
                    <FontAwesomeIcon icon={faSquarePlus} style={{ height: "20px" }} />
                    <span>Pubblica</span>
                  </Link>
                </Col>

                <Col style={{ height: "100%" }}>
                  <Link
                    to="/notifications"
                    className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                      location.pathname === "/notifications" ? "text-black" : ""
                    }`}
                    style={{ color: "#8d8d8d", height: "100%" }}
                  >
                    <FontAwesomeIcon icon={faBell} style={{ height: "20px" }} />
                    <span>Notifiche</span>
                  </Link>
                </Col>

                <Col style={{ height: "100%" }}>
                  <Link
                    to="/jobs"
                    className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                      location.pathname === "/jobs" ? "text-black" : ""
                    }`}
                    style={{ color: "#8d8d8d", height: "100%" }}
                  >
                    <FontAwesomeIcon icon={faBriefcase} style={{ height: "20px" }} />
                    <span> Lavoro</span>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default BottomBar;

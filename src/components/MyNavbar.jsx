import { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Navbar, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchJobsAction } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBriefcase, faCommentDots, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(searchJobsAction(query));
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-0">
      <Container fluid="xl">
        <Row className="flex-grow-1">
          <Col xs={5} className="p-1 d-flex align-items-center">
            <Link to="/" className="me-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                width={34}
                height={34}
                alt="Linkedin Icon"
              />
            </Link>
            <Form onSubmit={handleSubmit} style={{ maxWidth: "280px" }} className="flex-grow-1">
              <Form.Control
                className="border border-0"
                style={{ backgroundColor: "#EDF3F8" }}
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Cerca"
              />
            </Form>
          </Col>

          <Col xs={7} className="d-flex align-items-center flex-grow-1">
            <Row className="flex-grow-1" style={{ height: "100%" }}>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faHouse} style={{ height: "20px" }} />
                  Home
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faUserGroup} style={{ height: "20px" }} />
                  Rete
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faBriefcase} style={{ height: "20px" }} />
                  Lavoro
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faCommentDots} style={{ height: "20px" }} />
                  Messaggistica
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faBell} style={{ height: "20px" }} />
                  Notifiche
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Dropdown
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ borderRight: "solid 1px gray" }}
                >
                  <Dropdown.Toggle
                    className="nav-link my-navbar-text "
                    id="dropdown-basic"
                    style={{ color: "#8d8d8d", height: "100%", backgroundColor: "transparent" }}
                  >
                    <div>
                      <img src="" alt="user" />
                    </div>
                    Tu
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="border rounded-0 rounded-start rounded-bottom my-navbar-dropdown pb-0 shadow-sm mt-3"
                    drop={"start"}
                    style={{ backgroundColor: "white" }}
                  >
                    <Link to="#" className="text-decoration-none ">
                      <Dropdown.Item href="#/action-1" className="p-2" style={{ backgroundColor: "white" }}>
                        <div className="d-flex">
                          <div>
                            <img src="" alt="user" />
                          </div>
                          <div>
                            <h6>User Name</h6>
                            <p>User job</p>
                          </div>
                        </div>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill py-0"
                          size="sm"
                          style={{ backgroundColor: "transparent", color: "#0d6efd", width: "100%" }}
                        >
                          Visualizza profilo
                        </Button>
                      </Dropdown.Item>
                    </Link>
                    <hr className="m-0" />
                    <h6 className="pt-3 ps-3">Account</h6>
                    <Dropdown.Item href="#/action-2">Prova premium gratis</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Impostazioni e privacy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Guida</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Lingua</Dropdown.Item>
                    <hr className="m-0" />
                    <h6 className="pt-3 ps-3">Gestisci</h6>
                    <Dropdown.Item href="#/action-3">Post e attivitá</Dropdown.Item>
                    <Dropdown.Item className="text-truncate" href="#/action-3">
                      Account per la pubblicazione di offerte
                    </Dropdown.Item>
                    <hr className="m-0" />
                    <Dropdown.Item href="#/action-3">Esci</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faUserGroup} style={{ height: "20px" }} />
                  Rete
                </Link>
              </Col>
              <Col style={{ height: "100%" }}>
                <Link
                  to="#home"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon icon={faUserGroup} style={{ height: "20px" }} />
                  Rete
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

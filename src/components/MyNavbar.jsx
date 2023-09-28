import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownWideShort,
  faBell,
  faBriefcase,
  faCommentDots,
  faHouse,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Grid3x3GapFill, Search } from "react-bootstrap-icons";
import MyNavbarOffcanvas from "./MyNavbarOffcanvas";
import Bottombar from "./Bottombar";
import { getJobFromQueryAction, getMyProfileAction } from "../redux/actions";

const MyNavbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const user = useSelector((state) => state.profiles.myProfile);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query === "") {
      dispatch(getJobFromQueryAction("none"));
      window.location.href = "/jobs/none";
    } else {
      dispatch(getJobFromQueryAction(query));
      window.location.href = "/jobs/" + query;
    }
  };

  useEffect(() => {
    dispatch(getMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user && (
      <>
        <Navbar
          fixed="top"
          expand="lg"
          style={{ height: "53px", zIndex: "10" }}
          className="bg-white p-0"
        >
          <Container fluid="xl" style={{ height: "100%" }}>
            <Row className="flex-grow-1 " style={{ height: "100%" }}>
              <Col
                xs={1}
                lg={4}
                className="p-1  align-items-center d-none d-md-flex"
              >
                <Link to="/" className="me-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    width={34}
                    height={34}
                    alt="Linkedin Icon"
                  />
                </Link>

                <Form
                  onSubmit={handleSubmit}
                  style={{ maxWidth: "280px" }}
                  className="flex-grow-1 d-none d-lg-block "
                >
                  <InputGroup>
                    <InputGroup.Text
                      id="basic-addon1"
                      className="border border-0 p-0 ps-4 pe-1"
                      style={{ backgroundColor: "#EDF3F8" }}
                    >
                      <Search />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      value={query}
                      onChange={handleChange}
                      placeholder="Cerca"
                      className="border border-0"
                      style={{ backgroundColor: "#EDF3F8" }}
                    />
                  </InputGroup>
                </Form>
              </Col>
              <Col
                xs={1}
                className="nav-link d-flex justify-content-center d-md-none"
                style={{
                  color: "#8d8d8d",
                  height: "100%",
                  backgroundColor: "transparent",
                }}
              >
                <Link to="/profile" className="m-auto">
                  <img
                    src={user.image}
                    width={32}
                    height={32}
                    className="rounded-circle "
                    alt="user"
                  />
                </Link>
              </Col>
              <Col className="py-2 px-0 d-flex d-md-none ">
                <Form
                  onSubmit={handleSubmit}
                  className="d-flex flex-grow-1 justify-content-center"
                >
                  <InputGroup>
                    <InputGroup.Text
                      id="basic-addon1"
                      className="border border-0 p-0 ps-4 pe-1"
                      style={{ backgroundColor: "#EDF3F8" }}
                    >
                      <Search />
                    </InputGroup.Text>
                    <Form.Control
                      type="search"
                      value={query}
                      onChange={handleChange}
                      placeholder="Cerca"
                      className="border border-0"
                      style={{ backgroundColor: "#EDF3F8" }}
                    />
                  </InputGroup>
                </Form>
              </Col>
              <Col xs={1} className="d-md-none" style={{ height: "100%" }}>
                <Link
                  to="/publish"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon
                    icon={faArrowDownWideShort}
                    style={{ height: "20px" }}
                  />
                </Link>
              </Col>
              <Col xs={1} className="d-md-none" style={{ height: "100%" }}>
                <Link
                  to="/comments"
                  className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                  style={{ color: "#8d8d8d", height: "100%" }}
                >
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    style={{ height: "20px" }}
                  />
                </Link>
              </Col>

              <Col
                xs={10}
                lg={7}
                className="align-items-center flex-grow-1 d-none d-md-flex"
              >
                <Row className="flex-grow-1" style={{ height: "100%" }}>
                  <Col className="d-lg-none" style={{ height: "100%" }}>
                    <Link
                      className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <Search size={20} />
                      <span className="d-none d-md-block">Cerca</span>
                    </Link>
                  </Col>
                  <Col style={{ height: "100%" }}>
                    <Link
                      to="/"
                      className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ height: "20px" }}
                      />
                      <span className="d-none d-md-block"> Home</span>
                    </Link>
                  </Col>
                  <Col style={{ height: "100%" }}>
                    <Link
                      to="/mynetwork"
                      className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                        location.pathname === "/mynetwork" ? "active" : ""
                      }`}
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        style={{ height: "20px" }}
                      />
                      <span className="d-none d-md-block">Rete</span>
                    </Link>
                  </Col>
                  <Col style={{ height: "100%" }}>
                    <Link
                      to="/jobs/none"
                      className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                        location.pathname.includes("jobs") ? "active" : ""
                      }`}
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        style={{ height: "20px" }}
                      />
                      <span className="d-none d-md-block"> Lavoro</span>
                    </Link>
                  </Col>
                  <Col style={{ height: "100%" }}>
                    <Link
                      to="/messaging"
                      className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                        location.pathname === "/messaging" ? "active" : ""
                      }`}
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <FontAwesomeIcon
                        icon={faCommentDots}
                        style={{ height: "20px" }}
                      />
                      <span className="d-none d-md-block"> Messaggistica</span>
                    </Link>
                  </Col>
                  <Col style={{ height: "100%" }}>
                    <Link
                      to="/notifications"
                      className={`nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center ${
                        location.pathname === "/notifications" ? "active" : ""
                      }`}
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{ height: "20px" }}
                      />
                      <span className="d-none d-md-block">Notifiche</span>
                    </Link>
                  </Col>
                  <Col
                    className=" d-none d-md-block"
                    style={{ height: "100%", borderRight: "solid 1px #e5e5e5" }}
                  >
                    <Dropdown
                      className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                      style={{ height: "100%" }}
                    >
                      <Dropdown.Toggle
                        className="nav-link my-navbar-text"
                        id="dropdown-basic"
                        style={{
                          color: "#8d8d8d",
                          height: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div>
                          <Link to="/profile">
                            <img
                              src={user.image}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                              }}
                              alt="user"
                            />
                          </Link>
                        </div>
                        Tu
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="border rounded-0 rounded-start rounded-bottom my-navbar-dropdown pb-0 shadow-sm mt-2 "
                        drop={"start"}
                        style={{ backgroundColor: "white" }}
                      >
                        <div
                          className="text-decoration-none dropdown-item p-2 "
                          style={{ backgroundColor: "white" }}
                        >
                          <div className="d-flex">
                            <Link to="/profile" className="link">
                              <div className="p-2">
                                <img
                                  src={user.image}
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                  }}
                                  // className="rounded-circle"
                                  alt="user"
                                />
                              </div>
                            </Link>
                            <div className="flex-grow-1">
                              <Link
                                to="/profile"
                                className="link"
                                style={{ color: "black" }}
                              >
                                <h6>
                                  {user.name} {user.surname}
                                </h6>
                              </Link>
                              <p>{user.title}</p>
                            </div>
                          </div>

                          <Button
                            id="navbar-button"
                            variant="outline-primary"
                            className="rounded-pill py-0"
                            size="sm"
                            style={{
                              color: "#0d6efd",
                              width: "100%",
                            }}
                            onClick={() => {
                              navigate("/profile");
                              dispatch(getMyProfileAction());
                            }}
                          >
                            Visualizza profilo
                          </Button>
                        </div>
                        <hr className="m-0" />
                        <h6 className="pt-3 ps-3">Account</h6>
                        <Dropdown.Item>Prova premium gratis</Dropdown.Item>
                        <Dropdown.Item>Impostazioni e privacy</Dropdown.Item>
                        <Dropdown.Item>Guida</Dropdown.Item>
                        <Dropdown.Item>Lingua</Dropdown.Item>
                        <hr className="m-0" />
                        <h6 className="pt-3 ps-3">Gestisci</h6>
                        <Dropdown.Item>Post e attivitá</Dropdown.Item>
                        <Dropdown.Item className="text-truncate">
                          Account per la pubblicazione di offerte
                        </Dropdown.Item>
                        <hr className="m-0" />
                        <Dropdown.Item>Esci</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col
                    className="py-1 d-none d-sm-block"
                    style={{ height: "100%" }}
                  >
                    <Link
                      onClick={handleToggleOffcanvas}
                      className="nav-link d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center "
                      style={{ color: "#8d8d8d", height: "100%" }}
                    >
                      <Dropdown.Toggle
                        className="nav-link my-navbar-text "
                        id="dropdown-basic"
                        style={{
                          color: "#8d8d8d",
                          height: "100%",
                          backgroundColor: "transparent",
                        }}
                      >
                        <div>
                          <Grid3x3GapFill size={20} />
                        </div>
                        Per le aziende
                      </Dropdown.Toggle>
                    </Link>
                    <MyNavbarOffcanvas
                      show={showOffcanvas}
                      hide={handleToggleOffcanvas}
                    />
                  </Col>
                  <Col
                    xs={3}
                    className=" d-none d-md-block"
                    style={{ height: "100%" }}
                  >
                    <Link
                      to="/premium/"
                      className=" d-flex flex-column p-0 align-items-center my-navbar-text justify-content-center"
                      style={{ color: "#915907", height: "100%" }}
                    >
                      Prova premium gratis
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar>
        <div className="d-md-none">
          <Bottombar />
        </div>
      </>
    )
  );
};

export default MyNavbar;

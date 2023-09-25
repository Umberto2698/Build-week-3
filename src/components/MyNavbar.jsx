import { useState } from "react";
import { Button, Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { searchJobsAction } from "../redux/actions";

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
    <Navbar expand="lg" className="bg-body-tertiary p-1">
      <Container>
        <Row className="flex-grow-1">
          <Col xs={5} className="p-1 d-flex align-items-center">
            <Link to={"/"} className="me-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                width={34}
                height={34}
                alt="Linkedin Icon"
              />
            </Link>
            <Form onSubmit={handleSubmit} style={{ maxWidth: "280px" }} className="flex-grow-1">
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="Cerca" />
            </Form>
          </Col>

          <Col xs={7}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {/* <FontAwesomeIcon icon="fa-solid fa-house" style={{ color: "#8d8d8d" }} /> */}
                  Home
                </Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

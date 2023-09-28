import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import MyFooter from "./MyFooter";
import logoSVGCalendar from "../assets/icons8-calendar-25.png";
import logoSVGPicture from "../assets/icons8-picture.svg";
import logoSVGArticle from "../assets/icons8-picture-attachment-at-bottom-left-corner-of-the-page-24.png";
import logoSVGProfilePicture from "../assets/icons8-profile-48.png";
import Linkedin from "../assets/linkedin.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAction, postPostAction } from "../redux/actions";
import HomeLeftSidebarContainer from "./Home/HomeLeftSidebar/HomeLeftSidebarContainer";
import HomePostContainer from "./Home/HomeCenter/HomePostContainer";

const HomeMain = () => {
  const [newPost, setNewPost] = useState("");
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.allPosts?.content || []);

  useEffect(() => {
    dispatch(getPostsAction());
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postPostAction(newPost));
    setNewPost("");
  };

  return (
    <Container fluid="sm" className="px-0 pt-3" id="home-container">
      <Row>
        <HomeLeftSidebarContainer />

        <Col xs={12} md={9} lg={6} className="section" style={{ marginBottom: "4cm" }}>
          <Col className="bg-white rounded-3 pt-3 px-3 border">
            <Container fluid>
              <Row className="align-items-center">
                <Col className="text-center" xs={2}>
                  <img src={logoSVGProfilePicture} alt="profile-img" className="img-profile-input rounded-circle" />
                </Col>
                <Col xs={10} className="pe-5 ps-3">
                  <Form>
                    <FormControl placeholder="Avvia un post" className=" me-2 border-dark rounded-pill" type="text" />
                  </Form>
                </Col>
              </Row>
            </Container>
            <Row className="py-3">
              <Col xs={12} className="d-flex px-0 text-center align-items-center flex-wrap">
                <Col>
                  <img src={logoSVGPicture} alt="error" width={29} height={29} />
                  <Button className="bg-transparent border-0 text-dark"> Contenuti </Button>
                </Col>

                <Col>
                  {" "}
                  <img src={logoSVGCalendar} alt="error" width={23} height={26} />
                  <Button className="bg-transparent p-0 border-0 text-dark"> Evento</Button>
                </Col>
                <Col xs={5} className="">
                  <img src={logoSVGArticle} alt="error" width={19} height={19} />
                  <Button className="bg-transparent border-0 text-dark ">
                    <span className="">Scrivi un articolo</span>
                  </Button>
                </Col>
              </Col>
            </Row>
          </Col>
          <Col className="bg-white rounded-3 pt-3 px-3 border">
            <h2>Consigliati per te</h2>
          </Col>
          <HomePostContainer />
        </Col>

        <Col xs={12} md={3} className="section">
          <Col className="bg-white rounded-3 pt-3 px-3 border">
            <h2>Linkeidn Notizie</h2>
          </Col>

          {/* Immagine LinkedIn */}
          <Col className="bg-white rounded-3 pt-3 px-3 border">
            <img src={Linkedin} alt="error" width={170} height={180} />
          </Col>
        </Col>
      </Row>
      {/* Footer */}
      <Row>
        <Col xs={12} md={{ span: 3, offset: 9 }}>
          {" "}
          <MyFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMain;

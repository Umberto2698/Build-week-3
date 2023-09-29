import { Button, Col, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { InfoSquareFill } from "react-bootstrap-icons";
import SideFooter from "./SideFooter";
import logoSVGCalendar from "../assets/icons8-calendar-25.png";
import logoSVGPicture from "../assets/icons8-picture.svg";
import logoSVGArticle from "../assets/icons8-picture-attachment-at-bottom-left-corner-of-the-page-24.png";
import logoSVGProfilePicture from "../assets/icons8-profile-48.png";
import Linkedin from "../assets/linkedin.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePosts } from "../redux/actions";
import HomeLeftSidebarContainer from "./Home/HomeLeftSidebar/HomeLeftSidebarContainer";
import HomePostContainer from "./Home/HomeCenter/HomePostContainer";
import {
  CalendarWeek,
  CaretDownFill,
  Clock,
  EmojiSmile,
  Image,
  PatchPlusFill,
  ThreeDots,
  X,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomeMain = () => {
  const postArray = useSelector((state) => state.homePosts.content);
  const postLoading = useSelector((state) => state.homePosts.isLoading);
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();
  // const allPosts = useSelector((state) => state.allPosts?.content || []);
  const user = useSelector((state) => state.profiles.myProfile);
  const loading = useSelector((state) => state.profiles.isLoadingMyProfile);
  const [show, setShow] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const [filePreview, setFilePreview] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const isButtonDisabled = !inputText.trim();
  const initialItemsToShow = 3;
  const itemsToAdd = 5;
  const itemsToShow = showMore ? initialItemsToShow : initialItemsToShow + itemsToAdd;

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const onFileChange = (e) => {
    if (e.target && e.target.files[0]) {
      formData.append("post", e.target.files[0]);

      setFormData(formData);

      const selectedFile = e.target.files[0];

      const reader = new FileReader();

      reader.onload = (event) => {
        setFilePreview(event.target.result);
      };

      reader.readAsDataURL(selectedFile);

      setFileSelected(true);
    }
  };

  const handlePostSubmit = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzQ1MTM3NTJhODAwMTQ1Njg3NWUiLCJpYXQiOjE2OTU2NDk2MzMsImV4cCI6MTY5Njg1OTIzM30.ziDZO_nM89fW4fdpTggQDUDbOtVr2omLXNxEN2_kac4", // Sostituisci con il tuo token
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        throw new Error("Failed to create a new post");
      }

      const responseData = await response.json();
      const postId = responseData._id;

      console.log("Post created successfully! Post ID:", postId);

      if (fileSelected) {
        await sendImage(postId);
        handleRemoveImage();
      }

      handleClose();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const sendImage = async (postId) => {
    try {
      const imageResponse = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExMzQ1MTM3NTJhODAwMTQ1Njg3NWUiLCJpYXQiOjE2OTU2NDk2MzMsImV4cCI6MTY5Njg1OTIzM30.ziDZO_nM89fW4fdpTggQDUDbOtVr2omLXNxEN2_kac4",
        },
        body: formData,
      });

      if (!imageResponse.ok) {
        throw new Error("Failed to upload the image");
      }

      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getHomePosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostSubmit();
    setinputText("");
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
  };

  const handleImageModalShow = () => {
    setShowImageModal(true);
  };

  const handleImageModalClose = () => {
    setShowImageModal(false);
    handleRemoveImage();
  };
  const handleImageModalNext = () => {
    setShowImageModal(false);
    setShow(true);
  };

  const handleRemoveImage = () => {
    setFilePreview(null);
    setFileSelected(false);
    setFormData(new FormData());
    const fileInput = document.getElementById("formFile");
    if (fileInput) {
      fileInput.value = null;
    }
  };

  return (
    <>
      <Container fluid="sm" className="pt-3" id="home-container">
        <Row>
          <HomeLeftSidebarContainer />

          <Col xs={12} md={9} lg={6} className="mb-2">
            <Col className="bg-white rounded-3 pt-3 px-3 border mb-1">
              <Container fluid>
                <Row className="align-items-center">
                  <div className="d-flex p-0">
                    <div className="text-center me-2" xs={2}>
                      {loading ? (
                        <img
                          src={logoSVGProfilePicture}
                          alt="profile-img"
                          className="img-profile-input rounded-circle object-fit-cover"
                        />
                      ) : (
                        <Link to="/profile/">
                          <img
                            src={user?.image}
                            width={48}
                            height={48}
                            alt="profile-img"
                            className="img-profile-input rounded-circle object-fit-cover"
                          />
                        </Link>
                      )}
                    </div>

                    <div id="post-btn" className="flex-grow-1 border rounded-pill align-center">
                      <div className="p-2 ms-2 text-secondary" onClick={handleShow}>
                        Avvia un post
                      </div>
                    </div>
                  </div>
                </Row>
              </Container>
              <div className="py-3">
                <div className="d-flex px-0 text-center align-items-center flex-wrap justify-content-between">
                  <div id="post-btn" className="rounded-1">
                    <Button onClick={handleImageModalShow} className="bg-transparent border-0 text-dark d-flex">
                      <img src={logoSVGPicture} alt="error" width={29} height={29} className="m-auto me-2" /> Contenuti
                    </Button>
                  </div>
                  <div id="post-btn" className="rounded-1">
                    <Button className="bg-transparent border-0 text-dark d-flex">
                      <img src={logoSVGCalendar} alt="error" width={23} height={26} className="m-auto me-2" /> Evento
                    </Button>
                  </div>

                  <div id="post-btn" className="rounded-1">
                    <Button className="bg-transparent border-0 text-dark d-flex">
                      <img src={logoSVGArticle} alt="error" width={19} height={19} className="m-auto me-2" /> Scrivi un
                      articolo
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <HomePostContainer />
          </Col>
          <Col xs={12} md={3} className="section">
            {!postLoading && (
              <Col className="bg-white rounded-3 border mb-3">
                <div className="p-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="mt-2 d-inline-block t-14  " style={{ marginLeft: "7px", color: "#000000e6" }}>
                      Linkedin Notizie
                    </p>
                    <InfoSquareFill></InfoSquareFill>
                  </div>
                  {postArray.length !== 0 &&
                    postArray?.slice(0, itemsToShow).map((element, index) => (
                      <ul
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                          cursor: "pointer",
                          paddingLeft: "16px",
                          fontSize: "7.8px",
                          listStyleType: "disc",
                          backgroundColor: hoveredIndex === index ? "rgb(234, 234, 234)" : "transparent",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <li>
                          <span className="t-12" style={{ fontWeight: "bold", color: "3e3e3e" }}>
                            {element.text}
                          </span>
                          <span>
                            {/* <p className="t-12" style={{ color: "gray" }}>
                {formatDistanceToNow(new Date(element.createdAt), { locale: it })} fa
              </p> */}
                          </span>
                        </li>
                      </ul>
                    ))}
                </div>
                {postArray.length !== 0 && postArray.length > initialItemsToShow && (
                  <button
                    aria-expanded="false"
                    className="artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view news-module__toggle-storylines"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "rgb(174, 174, 174)",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                      padding: "0",
                      backgroundColor: "transparent",
                      marginLeft: "12px",
                      marginBottom: "5px",
                      transition: "background-color 0.3s",
                    }}
                    onClick={handleToggleShowMore}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "darkgray",
                        marginRight: "3px",
                        marginLeft: "9px",
                      }}
                      className="artdeco-button__text"
                    >
                      {showMore ? "Mostra di PiÃ¹" : "Mostra di meno"}
                    </span>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      className="artdeco-button__icon"
                      width="8"
                      height="8"
                      focusable="false"
                      style={{
                        marginRight: "4px",
                        transform: showMore ? "rotate(0deg)" : "rotate(180deg)",
                      }}
                    >
                      <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                    </svg>
                  </button>
                )}
              </Col>
            )}
            {/* Immagine LinkedIn */}
            <Col className="bg-white rounded-3 pt-3 px-3 border">
              <div className="text-center">
                <img src={Linkedin} alt="error" style={{ width: "210px" }} />
              </div>
            </Col>
            <SideFooter />
          </Col>
        </Row>
        {/* Footer */}
      </Container>
      {/* modale post */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton id="home-modal-close" className="border-0 position-absolute "></Modal.Header>
        <div id="post-btn" className="d-flex p-3 m-3 rounded-4 me-auto">
          <div>
            <img src={user?.image} width={58} height={58} className="rounded-circle me-3" alt="" />
          </div>
          <Modal.Title className="d-flex flex-column">
            <div>
              {user?.name} {user?.surname} <CaretDownFill />
            </div>
            <span className="fs-6">Pubblica: Chiunque</span>
          </Modal.Title>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex flex-column justify-content-between" style={{ minHeight: "350px" }}>
            <InputGroup className="mb-3 ">
              <Form.Control
                style={{ minHeight: "100px" }}
                className="border-0 p-3 fs-5 mx-3"
                id="home-modal-form"
                value={inputText}
                onChange={(e) => setinputText(e.target.value)}
                placeholder="Di cosa vorresti parlare?"
                aria-label="Di cosa vorresti parlare?"
                aria-describedby="basic-addon2"
              />
            </InputGroup>

            {filePreview && (
              <div className="text-center border rounded m-3 position-relative">
                <img src={filePreview} alt="Anteprima" width={200} className="p-2" />
                {fileSelected && (
                  <div
                    id="home-posts-img-remove"
                    className="me-3 mt-2 text-center rounded-circle position-absolute"
                    variant="danger"
                    onClick={handleRemoveImage}
                  >
                    <X className="fs-3" />
                  </div>
                )}
              </div>
            )}

            <div className="p-4">
              <div id="post-btn" className="mb-2 d-flex rounded-circle" style={{ width: "40px", height: "40px" }}>
                <EmojiSmile className="m-auto" />
              </div>
              <div className="d-flex">
                <span
                  id="home-modal-icons"
                  className="rounded-circle d-flex justify-content-center text-secondary me-2"
                  onClick={handleImageModalShow}
                >
                  <Image className="m-auto fs-5" />
                </span>
                <span
                  id="home-modal-icons"
                  className="rounded-circle d-flex justify-content-center text-secondary me-2"
                >
                  <CalendarWeek className="m-auto fs-5" />
                </span>
                <span
                  id="home-modal-icons"
                  className="rounded-circle d-flex justify-content-center text-secondary me-2"
                >
                  <PatchPlusFill className="m-auto fs-5" />
                </span>
                <span
                  id="home-modal-icons"
                  className="rounded-circle d-flex justify-content-center text-secondary me-2"
                >
                  <ThreeDots className="m-auto fs-5 " />
                </span>
              </div>
            </div>
          </div>
          <Modal.Footer>
            <div id="post-btn" className="d-flex rounded-circle" style={{ width: "40px", height: "40px" }}>
              <Clock className="m-auto" />
            </div>
            <Button
              variant="primary"
              type="submit"
              className={`rounded-pill ${isButtonDisabled ? "disabled-button" : ""}`}
              onClick={handleClose}
              disabled={isButtonDisabled}
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* modale caricamento immagine */}
      <Modal show={showImageModal} onHide={handleImageModalClose} className="large-modal">
        <Modal.Header closeButton>
          <Modal.Title>Carica Immagini</Modal.Title>
        </Modal.Header>
        <Form className="pt-4" onSubmit={handleImageSubmit}>
          <Modal.Body style={{ minHeight: "400px" }}>
            <div className="pb-4">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Scegli un'immagine da caricare</Form.Label>
                <Form.Control type="file" onChange={(e) => onFileChange(e)} />

                {filePreview && (
                  <div className="text-center m-3 border rounded-3 position-relative">
                    <img src={filePreview} alt="Anteprima" className="p-3" />

                    {fileSelected && (
                      <div
                        id="home-posts-img-remove"
                        className="me-3 mt-2 text-center rounded-circle position-absolute"
                        variant="danger"
                        onClick={handleRemoveImage}
                      >
                        <X className="fs-3" />
                      </div>
                    )}
                  </div>
                )}
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {show && (
              <Button variant="outline-primary rounded-pill" onClick={handleImageModalClose}>
                Indietro
              </Button>
            )}
            <Button
              variant="primary"
              type="submit"
              className={`rounded-pill ${!fileSelected ? "disabled-button" : ""}`}
              onClick={handleImageModalNext}
              disabled={!fileSelected}
            >
              Avanti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default HomeMain;

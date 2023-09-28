import { useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { BookmarkFill, CaretDownFill, CaretUpFill, SquareHalf } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeLeftSidebarBottom from "./HomeLeftSidebarBottom";

const HomeLeftSidebarTop = () => {
  const user = useSelector(state => state.profiles.myProfile);
  const loading = useSelector(state => state.profiles.isLoadingMyProfile);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {!loading ? (
        <>
          <Card className="bg-white rounded-3 mb-2">
            <div
              className="border-0 rounded-top-3"
              style={{ height: "56px", width: "100%", backgroundColor: "palegoldenrod" }}
            ></div>
            <Link id="home-left-sidebar-link" to="/profile/" className="text-center text-black">
              <div id="home-left-sidebar-image" className="position-absolute">
                <img
                  className="rounded-circle border border-2 border-white"
                  src={user.image}
                  width={72}
                  height={72}
                  alt=""
                />
              </div>
              <div style={{ height: "52px" }}></div>
              <Card.Title style={{ fontSize: "1rem" }}>
                {user.name}
                <span> </span>
                {user.surname}
              </Card.Title>
            </Link>
            <Card.Body className="p-0">
              <Card.Text className="text-center text-secondary pb-3 " style={{ fontSize: "0.8rem" }}>
                {user.title}
              </Card.Text>
            </Card.Body>
            <div className={`d-md-block ${!isExpanded ? "d-none" : "d-block"}`}>
              <Card.Text
                id="home-left-sidebar-link-bg"
                className="text-secondary p-2 border-bottom m-0 border-top"
                style={{ fontSize: "0.7rem" }}
              >
                <Link to="/mynetwork/" className="text-decoration-none ">
                  <span className="d-flex justify-content-between">
                    <span className="text-secondary ">Collegamento</span> <span className="text-primary">0</span>
                  </span>
                  <span className="text-dark fw-medium">Espandi la tua rete</span>
                </Link>
              </Card.Text>
              <Card.Text
                id="home-left-sidebar-link-bg"
                className="text-secondary p-2 border-bottom m-0"
                style={{ fontSize: "0.7rem" }}
              >
                <Link to="/premium/" className="text-decoration-none ">
                  <span className="text-secondary ">Accedi a strumenti e informazioni in esclusiva</span>{" "}
                  <span className="d-flex">
                    <span>
                      <SquareHalf className="text-warning" />
                    </span>

                    <span className="text-dark fw-medium text-decoration-underline ms-1">Prova Premium gratis</span>
                  </span>
                </Link>
              </Card.Text>
              <Card.Text
                id="home-left-sidebar-link-bg"
                className="text-secondary p-2 m-0 rounded-bottom-3"
                style={{ fontSize: "0.7rem" }}
              >
                <Link to="/my-items/" className="text-decoration-none text-dark ">
                  <span className="text-dark fw-medium">
                    <BookmarkFill />
                    <span className="ms-2">I miei elementi</span>
                  </span>
                </Link>
              </Card.Text>
            </div>
          </Card>
          <div className={`mb-2 d-md-block ${!isExpanded ? "d-none" : "d-block"}`}>
            <HomeLeftSidebarBottom />
          </div>
          <div className="d-md-none text-secondary mb-3" onClick={handleToggleClick}>
            {isExpanded ? (
              <>
                <div id="post-btn" className="d-flex justify-content-center align-center rounded-1">
                  <span className="me-1"> Mostra meno</span>
                  <span className="d-flex">
                    <CaretUpFill className="m-auto" />
                  </span>
                </div>
              </>
            ) : (
              <>
                <div id="post-btn" className="d-flex justify-content-center align-center rounded-1">
                  <span className="me-1"> Vedi altro</span>
                  <span className="d-flex">
                    <CaretDownFill className="m-auto" />
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="my-2">
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
        </div>
      )}
    </>
  );
};

export default HomeLeftSidebarTop;

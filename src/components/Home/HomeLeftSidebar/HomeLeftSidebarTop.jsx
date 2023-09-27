import { Card, Col } from "react-bootstrap";
import { BookmarkFill, SquareHalf } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeLeftSidebarTop = () => {
  const user = useSelector(state => state.user.content);

  console.log(user);

  return (
    <>
      {user && (
        <Card className="bg-white rounded-3 mb-2">
          <div className="border-0" style={{ height: "56px", width: "100%", backgroundColor: "palegoldenrod" }}></div>
          <Link id="home-left-sidebar-link" to="/profile/" className="text-center text-black">
            <div id="home-left-sidebar-image" className="position-absolute">
              <img className="rounded-circle border border-2 border-white" src={user.image} width={72} alt="" />
            </div>
            <div style={{ height: "52px" }}></div>
            <Card.Title style={{ fontSize: "1rem" }}>
              {user.name}
              <span> </span>
              {user.surname}
            </Card.Title>
          </Link>
          <Card.Body className="border-bottom  p-0">
            <Card.Text className="text-center text-secondary pb-3 " style={{ fontSize: "0.8rem" }}>
              {user.title}
            </Card.Text>
          </Card.Body>
          <Card.Text
            id="home-left-sidebar-link-bg"
            className="text-secondary p-2 border-bottom m-0"
            style={{ fontSize: "0.7rem" }}
          >
            <Link to="/mynetwork/" className="text-decoration-none ">
              <div className="d-flex justify-content-between">
                <div className="text-secondary ">Collegamento</div> <span className="text-primary">0</span>
              </div>
              <div className="text-dark fw-medium">Espandi la tua rete</div>
            </Link>
          </Card.Text>
          <Card.Text
            id="home-left-sidebar-link-bg"
            className="text-secondary p-2 border-bottom m-0"
            style={{ fontSize: "0.7rem" }}
          >
            <Link to="/premium/" className="text-decoration-none ">
              <div className="text-secondary ">Accedi a strumenti e informazioni in esclusiva</div>{" "}
              <div className="d-flex">
                <div>
                  <SquareHalf />
                </div>

                <div className="text-dark fw-medium text-decoration-underline ms-1">Prova Premium gratis</div>
              </div>
            </Link>
          </Card.Text>
          <Card.Text
            id="home-left-sidebar-link-bg"
            className="text-secondary p-2 m-0 rounded-bottom"
            style={{ fontSize: "0.7rem" }}
          >
            <Link to="/my-item/s" className="text-decoration-none text-dark ">
              <div className="text-dark fw-medium">
                <BookmarkFill />
                <span className="ms-2">I miei elementi</span>
              </div>
            </Link>
          </Card.Text>
        </Card>
      )}
    </>
  );
};

export default HomeLeftSidebarTop;

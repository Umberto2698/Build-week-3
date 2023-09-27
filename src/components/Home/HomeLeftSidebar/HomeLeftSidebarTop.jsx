import { Card, Placeholder } from "react-bootstrap";
import { BookmarkFill, SquareHalf } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeLeftSidebarTop = () => {
  const user = useSelector(state => state.user.content);
  const loading = useSelector(state => state.user.isLoading);

  return (
    <>
      {!loading ? (
        <Card className="bg-white rounded- mb-2">
          <div
            className="border-0 rounded-top"
            style={{ height: "56px", width: "100%", backgroundColor: "palegoldenrod" }}
          ></div>
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
            className="text-secondary p-2 m-0 rounded-bottom"
            style={{ fontSize: "0.7rem" }}
          >
            <Link to="/my-item/s" className="text-decoration-none text-dark ">
              <span className="text-dark fw-medium">
                <BookmarkFill />
                <span className="ms-2">I miei elementi</span>
              </span>
            </Link>
          </Card.Text>
        </Card>
      ) : (
        <>
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
        </>
      )}
    </>
  );
};

export default HomeLeftSidebarTop;

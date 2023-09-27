import { Card, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomeLeftSidebarBottom = () => {
  return (
    <Card className="bg-white rounded-3 ">
      <Card.Body className="p-2 border-bottom pt-3">
        <Link to="/premium/" className="text-decoration-none">
          <Card.Text className="mb-2" style={{ fontSize: "0.7rem" }}>
            Gruppi
          </Card.Text>
        </Link>
        <div className="d-flex justify-content-between mb-1">
          <Link to="/premium/" className="text-decoration-none ">
            <Card.Text style={{ fontSize: "0.7rem" }}>
              <span>Eventi</span>
            </Card.Text>
          </Link>
          <Plus className="fs-5" />
        </div>
        <Card.Text style={{ fontSize: "0.7rem" }}>
          <Link to="/premium/" className="text-decoration-none ">
            Hashtag seguiti
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Text
        id="home-left-sidebar-link-bg"
        className="text-center rounded-bottom p-2 m-0"
        style={{ fontSize: "0.8rem" }}
      >
        <Link to="/my-item/s" className="text-decoration-none text-secondary ">
          <div className="fw-medium">I miei elementi</div>
        </Link>
      </Card.Text>
    </Card>
  );
};

export default HomeLeftSidebarBottom;

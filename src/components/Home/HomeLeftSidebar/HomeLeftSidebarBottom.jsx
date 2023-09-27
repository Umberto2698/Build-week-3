import { Card } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HomeLeftSidebarBottom = () => {
  return (
    <>
      <Card className="bg-white rounded-3 ">
        <Card.Body className="p-2 border-bottom pt-3">
          <Link to="/groups/" className="text-decoration-none">
            <Card.Text className="mb-2" style={{ fontSize: "0.7rem" }}>
              Gruppi
            </Card.Text>
          </Link>
          <div className="d-flex justify-content-between mb-1">
            <Link to="/events/" className="text-decoration-none ">
              <Card.Text style={{ fontSize: "0.7rem" }}>
                <span>Eventi</span>
              </Card.Text>
            </Link>
            <Plus className="fs-5" />
          </div>
          <Card.Text style={{ fontSize: "0.7rem" }}>
            <Link to="/mynetwork/network-manager/people-follow/following/" className="text-decoration-none ">
              Hashtag seguiti
            </Link>
          </Card.Text>
        </Card.Body>
        <Link to="/mynetwork/discover-hub/" className="text-decoration-none text-secondary">
          <Card.Text
            id="home-left-sidebar-link-bg"
            className="text-center rounded-bottom p-2"
            style={{ fontSize: "0.8rem" }}
          >
            <div className="fw-medium mb-1">Scopri di piú </div>
          </Card.Text>
        </Link>
      </Card>
    </>
  );
};

export default HomeLeftSidebarBottom;

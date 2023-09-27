import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeLeftSidebarBottom = () => {
  return (
    <Card className="bg-white rounded-3 ">
      <Card.Body className="p-2">
        <Link to="/groups/">
          <Card.Text style={{ fontSize: "0.7rem" }}>
            <Link to="/premium/" className="text-decoration-none ">
              <div className="text-secondary ">Accedi a strumenti e informazioni in esclusiva</div>{" "}
              <div className="d-flex">
                <div></div>

                <div className="text-dark fw-medium text-decoration-underline ms-1">Prova Premium gratis</div>
              </div>
            </Link>
          </Card.Text>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default HomeLeftSidebarBottom;

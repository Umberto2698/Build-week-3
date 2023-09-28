import { Button, Col, Container, Row } from "react-bootstrap";
import { BookmarkFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import Jobs from "./Jobs";

const FavouriteJobs = () => {
  const favouriteArray = useSelector((state) => state.favourite.list.content);

  return (
    <Container style={{ paddingTop: "65px" }}>
      <Row>
        <Col lg={3}>
          <div className="d-flex flex-column align-items-center justify-content-center bg-white border border-secondary-subtle rounded-2 w-100">
            <div className="d-flex align-items-center text-secondary border-bottom border-bottom-secondary w-100 px-2 py-2">
              <BookmarkFill size={15}></BookmarkFill>
              <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">I miei elementi</span>
            </div>
            <div id="text-hover" className="d-flex align-items-center justify-content-between w-100 px-2 py-2">
              <span className="text-primary fw-medium " style={{ fontSize: "14px" }}>
                Le mie offerte di lavoro
              </span>
              <span className="fw-medium " style={{ fontSize: "14px" }}>
                num
              </span>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="d-flex flex-column align-items-center justify-content-center bg-white border border-secondary-subtle rounded-2 w-100">
            <div className="w-100 text-start px-3 mt-3 pb-2 border-bottom border-bottom-secondary-subtle">
              <h1 className="m-0 mb-2 ms-2 fw-normal fs-4">Le mie offerte di lavoro</h1>
              <Button className="text-white fw-medium rounded-pill py-1" variant="success outline-success">
                Salvate
              </Button>
            </div>
            {favouriteArray.length !== 0 && favouriteArray.map((job) => <Jobs jobData={job} key={job._id}></Jobs>)}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteJobs;

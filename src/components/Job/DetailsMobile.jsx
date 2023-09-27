import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJobFromId } from "../../redux/actions";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import JobDetails from "./JobDetails";

const DetailsMobile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.single.content);
  const selectedJobId = useSelector((state) => state.job.selected.content);
  const parser = new DOMParser();

  const changeDescription = (col, des) => {
    if (des.slice(0, 15) === "<p><br><br></p>") {
      col.innerHTML = des.slice(15);
    } else if (des.slice(0, 21) === `<p class="description`) {
      col.innerHTML = des.slice(324);
    } else {
      col.innerHTML = des;
    }
  };

  useEffect(() => {
    if (job && selectedJobId === job._id) {
      const colonnaDescrizione = document.getElementById("description");
      changeDescription(colonnaDescrizione, parser.parseFromString(job.description, "text/html").body.innerHTML);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [job]);

  useEffect(() => {
    dispatch(getJobFromId(selectedJobId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid="sm" style={{ paddingTop: "53px" }}>
      {job === null || job._id !== selectedJobId ? (
        <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "85vh" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row>
          <Col xs={{ span: 11, offset: 1 }}>
            <div className="scroll2">
              <JobDetails category={params.category} jobData={job}></JobDetails>
              <div id="description"></div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DetailsMobile;

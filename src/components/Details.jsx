import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import JobsPlaceholder from "./JobsPlaceholder";
import { useEffect } from "react";
import { getRandomJobsAction } from "../redux/actions";

const Details = () => {
  const randomJobArray = useSelector((state) => state.job.random.content);
  const loading = useSelector((state) => state.state.loading.content);
  const selectedJobId = useSelector((state) => state.job.selected.content);
  const dispatch = useDispatch();
  const parser = new DOMParser();
  const colonnaDescrizione = document.getElementById("description");

  const changeDescription = () => {
    colonnaDescrizione.innerHTML = parser.parseFromString(
      randomJobArray.filter((el) => el._id === selectedJobId)[0].description,
      "text/html"
    ).body.innerHTML;
  };
  if (loading) {
    changeDescription();
  }

  useEffect(() => {
    dispatch(getRandomJobsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={6} className=" align-items-center justify-content-start">
          <div className="bg-primary px-2 py-1 position-sticky top-0 text-white">
            <h4 className="m-0" style={{ fontSize: "15px" }}>
              Offerte di lavoro sulla base del tuo profilo
            </h4>
            <p className="m-0" style={{ fontSize: "12px" }}>
              {randomJobArray.length} risultati
            </p>
          </div>
          <div className="scroll ">
            <div
              onClick={() => {
                changeDescription();
              }}
              className="d-flex flex-column align-items-center justify-content-start w-100"
            >
              {loading === true
                ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
                : randomJobArray.length !== 0 &&
                  randomJobArray.map((job) => <Jobs selected={selectedJobId} jobData={job} key={job._id}></Jobs>)}
            </div>
          </div>
        </Col>
        <Col lg={6} id="description"></Col>
      </Row>
    </Container>
  );
};

export default Details;

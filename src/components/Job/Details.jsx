import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import JobsPlaceholder from "./JobsPlaceholder";
import { useEffect } from "react";
import { SELECT_DESCRIPTION, getRandomJobsAction } from "../../redux/actions";
import JobDetails from "./JobDetails";

const Details = () => {
  const randomJobArray = useSelector((state) => state.job.random.content);
  const selectedJobId = useSelector((state) => state.job.selected.content);
  const selectedDescription = useSelector((state) => state.job.description.content);
  const loading = useSelector((state) => state.state.loading.content);
  const dispatch = useDispatch();

  const parser = new DOMParser();
  const colonnaDescrizione = document.getElementById("description");
  const description = parser.parseFromString(
    randomJobArray.filter((el) => el._id === selectedJobId)[0].description,
    "text/html"
  ).body.innerHTML;
  const changeDescription = () => {
    if (description.slice(0, 15) === "<p><br><br></p>") {
      console.log(description.slice(0, 15));
      colonnaDescrizione.innerHTML = description.slice(15);
    } else if (description.slice(0, 21) === `<p class="description`) {
      colonnaDescrizione.innerHTML = description.slice(324);
    } else {
      colonnaDescrizione.innerHTML = description;
    }
  };

  if (loading) {
    changeDescription();
  }
  useEffect(() => {
    if (description.slice(0, 100) !== selectedDescription.slice(0, 100)) {
      changeDescription();
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDescription]);

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
                dispatch({
                  type: SELECT_DESCRIPTION,
                  payload: description,
                });
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
        <Col lg={6}>
          <div className="scroll2">
            {randomJobArray
              .filter((el) => el._id === selectedJobId)
              .map((el, i) => (
                <JobDetails jobData={el} key={i}></JobDetails>
              ))}
            <div id="description"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;

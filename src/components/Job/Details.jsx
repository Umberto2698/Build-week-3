import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import JobsPlaceholder from "./JobsPlaceholder";
import { useEffect, useState } from "react";
import { SELECT_DESCRIPTION, getRandomJobsAction } from "../../redux/actions";
import JobDetails from "./JobDetails";

const Details = () => {
  const randomJobArray = useSelector((state) => state.job.random.content);
  const selectedJobId = useSelector((state) => state.job.selected.content);
  const selectedDescription = useSelector((state) => state.job.description.content);
  const loading = useSelector((state) => state.state.loading.content);
  const dispatch = useDispatch();

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
    if (
      selectedJobId !== "" &&
      parser
        .parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
        .body.innerHTML.slice(0, 100) !== selectedDescription.slice(0, 100)
    ) {
      console.log("qui");
      const colonnaDescrizione = document.getElementById("description");
      changeDescription(
        colonnaDescrizione,
        parser.parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html").body
          .innerHTML
      );
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDescription]);

  useEffect(() => {
    dispatch(getRandomJobsAction());
    if (selectedJobId !== "") {
      const colonnaDescrizione = document.getElementById("description");
      changeDescription(
        colonnaDescrizione,
        parser.parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html").body
          .innerHTML
      );
    } else {
      const colonnaDescrizione = document.getElementById("description");
      changeDescription(
        colonnaDescrizione,
        parser.parseFromString(randomJobArray[0].description, "text/html").body.innerHTML
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={{ paddingTop: "53px" }}>
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
                  payload: parser.parseFromString(
                    randomJobArray.filter((el) => el._id === selectedJobId)[0].description,
                    "text/html"
                  ).body.innerHTML,
                });
              }}
              className="d-flex flex-column align-items-center justify-content-start w-100"
            >
              {loading === true
                ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
                : randomJobArray.length !== 0 && selectedJobId !== ""
                ? randomJobArray.map((job) => <Jobs selected={selectedJobId} jobData={job} key={job._id}></Jobs>)
                : (randomJobArray.slice(0, 1).map((job) => <Jobs selected={true} jobData={job} key={job._id}></Jobs>),
                  randomJobArray.slice(1).map((job) => <Jobs selected={false} jobData={job} key={job._id}></Jobs>))}
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="scroll2">
            {selectedJobId === "" && <JobDetails jobData={randomJobArray[0]} key={1}></JobDetails>}
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

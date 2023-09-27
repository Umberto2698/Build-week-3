import { Col, Container, Row } from "react-bootstrap";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import JobsPlaceholder from "./JobsPlaceholder";
import { useEffect } from "react";
import { SELECT_DESCRIPTION, SELECT_JOB, getCategoryJobsAction, getRandomJobsAction } from "../../redux/actions";
import JobDetails from "./JobDetails";
import { Link, useLocation } from "react-router-dom";

const Details = () => {
  const randomJobArray = useSelector((state) => state.job.random.content);
  const categoryJobArray = useSelector((state) => state.job.category.content);
  const selectedJobId = useSelector((state) => state.job.selected.content);
  const selectedDescription = useSelector((state) => state.job.description.content);
  const loading = useSelector((state) => state.state.loading.content);
  const dispatch = useDispatch();
  const location = useLocation();

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
    if (location.pathname.includes("random")) {
      if (
        selectedJobId !== "" &&
        parser
          .parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
          .body.innerHTML.slice(0, 100) !== selectedDescription.slice(0, 100)
      ) {
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
            .body.innerHTML
        );
      }
    } else {
      if (
        selectedJobId !== "" &&
        parser
          .parseFromString(categoryJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
          .body.innerHTML.slice(0, 100) !== selectedDescription.slice(0, 100)
      ) {
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(categoryJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
            .body.innerHTML
        );
      }
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDescription]);

  useEffect(() => {
    if (location.pathname.includes("random")) {
      if (selectedJobId !== "") {
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(randomJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
            .body.innerHTML
        );
      } else if (selectedJobId === "" && randomJobArray.length !== 0) {
        dispatch({ type: SELECT_JOB, payload: randomJobArray[0]._id });
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(randomJobArray[0].description, "text/html").body.innerHTML
        );
      }
    } else {
      if (selectedJobId !== "") {
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(categoryJobArray.filter((el) => el._id === selectedJobId)[0].description, "text/html")
            .body.innerHTML
        );
      } else if (selectedJobId === "" && categoryJobArray.length !== 0) {
        dispatch({ type: SELECT_JOB, payload: categoryJobArray[0]._id });
        const colonnaDescrizione = document.getElementById("description");
        changeDescription(
          colonnaDescrizione,
          parser.parseFromString(categoryJobArray[0].description, "text/html").body.innerHTML
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomJobArray, categoryJobArray]);

  useEffect(() => {
    if (location.pathname.includes("random")) {
      dispatch(getRandomJobsAction());
    } else {
      dispatch(getCategoryJobsAction("dev"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid="md" style={{ paddingTop: "53px" }}>
      {location.pathname.includes("random") ? (
        <Row>
          <Col sm={6} className="flex-grow-1 mb-5 mb-md-0 align-items-center justify-content-start">
            <div className="bg-primary px-2 py-1 position-sticky top-0 text-white">
              <h4 className="m-0" style={{ fontSize: "15px" }}>
                Offerte di lavoro sulla base del tuo profilo
              </h4>
              <p className="m-0" style={{ fontSize: "12px" }}>
                {randomJobArray.length} risultati
              </p>
            </div>
            <div className="scroll ">
              {window.screen.availWidth <= 639 ? (
                <Link className="text-decoration-none" to={`/jobs/details/mobile/random/`}>
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
                      : randomJobArray
                          .slice(0, 1)
                          .map((job) => <Jobs selected={true} jobData={job} key={job._id}></Jobs>)
                          .concat(
                            randomJobArray
                              .slice(1)
                              .map((job) => <Jobs selected={false} jobData={job} key={job._id}></Jobs>)
                          )}
                  </div>
                </Link>
              ) : (
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
                    : randomJobArray
                        .slice(0, 1)
                        .map((job) => <Jobs selected={true} jobData={job} key={job._id}></Jobs>)
                        .concat(
                          randomJobArray
                            .slice(1)
                            .map((job) => <Jobs selected={false} jobData={job} key={job._id}></Jobs>)
                        )}
                </div>
              )}
            </div>
          </Col>
          <Col sm={6} className="details mb-5 mb-md-0">
            <div className="scroll2">
              {selectedJobId === "" && randomJobArray.length !== 0 && (
                <JobDetails jobData={randomJobArray[0]} key={1}></JobDetails>
              )}
              {randomJobArray
                .filter((el) => el._id === selectedJobId)
                .map((el, i) => (
                  <JobDetails jobData={el} key={i}></JobDetails>
                ))}
              <div id="description"></div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col sm={6} className="flex-grow-1 mb-5 mb-md-0 align-items-center justify-content-start">
            <div className="bg-primary px-2 py-1 position-sticky top-0 text-white">
              <h4 className="m-0" style={{ fontSize: "15px" }}>
                Offerte di lavoro sulla base del tuo profilo
              </h4>
              <p className="m-0" style={{ fontSize: "12px" }}>
                {categoryJobArray.length} risultati
              </p>
            </div>
            <div className="scroll ">
              {window.screen.availWidth <= 639 ? (
                <Link className="text-decoration-none" to={`/jobs/details/mobile/dev/`}>
                  <div
                    onClick={() => {
                      dispatch({
                        type: SELECT_DESCRIPTION,
                        payload: parser.parseFromString(
                          categoryJobArray.filter((el) => el._id === selectedJobId)[0].description,
                          "text/html"
                        ).body.innerHTML,
                      });
                    }}
                    className="d-flex flex-column align-items-center justify-content-start w-100"
                  >
                    {loading === true
                      ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
                      : categoryJobArray.length !== 0 && selectedJobId !== ""
                      ? categoryJobArray.map((job) => (
                          <Jobs selected={selectedJobId} jobData={job} key={job._id}></Jobs>
                        ))
                      : categoryJobArray
                          .slice(0, 1)
                          .map((job) => <Jobs selected={true} jobData={job} key={job._id}></Jobs>)
                          .concat(
                            categoryJobArray
                              .slice(1)
                              .map((job) => <Jobs selected={false} jobData={job} key={job._id}></Jobs>)
                          )}
                  </div>
                </Link>
              ) : (
                <div
                  onClick={() => {
                    dispatch({
                      type: SELECT_DESCRIPTION,
                      payload: parser.parseFromString(
                        categoryJobArray.filter((el) => el._id === selectedJobId)[0].description,
                        "text/html"
                      ).body.innerHTML,
                    });
                  }}
                  className="d-flex flex-column align-items-center justify-content-start w-100"
                >
                  {loading === true
                    ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
                    : categoryJobArray.length !== 0 && selectedJobId !== ""
                    ? categoryJobArray.map((job) => <Jobs selected={selectedJobId} jobData={job} key={job._id}></Jobs>)
                    : categoryJobArray
                        .slice(0, 1)
                        .map((job) => <Jobs selected={true} jobData={job} key={job._id}></Jobs>)
                        .concat(
                          categoryJobArray
                            .slice(1)
                            .map((job) => <Jobs selected={false} jobData={job} key={job._id}></Jobs>)
                        )}
                </div>
              )}
            </div>
          </Col>
          <Col sm={6} className="details mb-5 mb-md-0">
            <div className="scroll2">
              {selectedJobId === "" && categoryJobArray.length !== 0 && (
                <JobDetails jobData={categoryJobArray[0]} key={1}></JobDetails>
              )}
              {categoryJobArray
                .filter((el) => el._id === selectedJobId)
                .map((el, i) => (
                  <JobDetails jobData={el} key={i}></JobDetails>
                ))}
              <div id="description"></div>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Details;

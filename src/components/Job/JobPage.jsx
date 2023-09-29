import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight, ArrowUpLeftCircle } from "react-bootstrap-icons";
import React, { useEffect } from "react";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryJobsAction, getJobFromQueryAction, getRandomJobsAction } from "../../redux/actions";
import JobsPlaceholder from "./JobsPlaceholder";
import SideFooter from "../SideFooter";
import Sidebar from "./Sidebar";
import { Link, useParams } from "react-router-dom";

const JobPage = () => {
  const dispatch = useDispatch();
  const randomJobArray = useSelector((state) => state.job.random.content.slice(0, 5));
  const categoryJobArray = useSelector((state) => state.job.category.content.slice(0, 5));
  const searchedJobArray = useSelector((state) => state.job.query.content.slice(0, 5));
  const loading = useSelector((state) => state.state.loading.content);
  const params = useParams();

  useEffect(() => {
    if (params.query !== "none") {
      dispatch(getJobFromQueryAction(params.query));
    }
    dispatch(getRandomJobsAction());
    dispatch(getCategoryJobsAction("dev"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid="sm" style={{ paddingTop: "65px" }}>
      <Row>
        <Col sm={12} md={4} lg={3} className="flex-grow-1 flex-column align-items-center justify-content-start ">
          <Sidebar></Sidebar>
        </Col>
        <Col sm={12} md={8} lg={5} xl={6} className=" flex-column align-items-center justify-content-start">
          {params.query !== "none" && (
            <div className="d-flex flex-column align-items-center justify-content-between mb-3 pt-3 text-secondary bg-white border border-secondary-subtle rounded-3">
              <div className="d-flex flex-column align-items-start w-100 mb-2 px-2">
                <h2 className="m-0 text-dark" style={{ fontSize: "20px" }}>
                  Risultati di ricerca con {params.query}
                </h2>
                <p className="m-0" style={{ fontSize: "13px" }}>
                  Sulla base della tua ricerca
                </p>
              </div>
              {loading === true
                ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
                : searchedJobArray.length !== 0 &&
                  searchedJobArray.map((job) => (
                    <Jobs path={params.query} selected={false} jobData={job} key={job._id}></Jobs>
                  ))}
              {searchedJobArray.length !== 0 ? (
                <Link to={`details/` + params.query} className="text-decoration-none text-reset job-detail w-100">
                  <div className=" border-top border-top-secondary-subtle d-flex align-items-center justify-content-center py-3">
                    <h4 className="m-0 d-inline-block me-2" style={{ fontSize: "15px" }}>
                      Mostra tutto
                    </h4>
                    <ArrowRight size={20}></ArrowRight>
                  </div>
                </Link>
              ) : (
                <div className=" border-top border-top-secondary-subtle d-flex w-100 text-dark align-items-center justify-content-center py-3">
                  <ArrowUpLeftCircle size={20}></ArrowUpLeftCircle>
                  <div className=" ms-3 d-flex flex-column align-items-center justify-content-start">
                    <h4 className="m-0 d-inline-block me-2" style={{ fontSize: "15px" }}>
                      La tua ricerca non ha portato ad alcun risultato
                    </h4>
                    <h4 className="m-0 d-inline-block me-2" style={{ fontSize: "15px" }}>
                      specifica meglio cosa stai cercando
                    </h4>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="d-flex flex-column align-items-center justify-content-between pt-3 mb-3 bg-white text-secondary border border-secondary-subtle rounded-3">
            <div className="d-flex flex-column align-items-start w-100 mb-2 px-2">
              <h2 className="m-0 text-dark" style={{ fontSize: "20px" }}>
                Consigliato per te
              </h2>
              <p className="m-0 " style={{ fontSize: "13px" }}>
                Sulla base del tuo profilo e della tua cronologia di ricerche
              </p>
            </div>
            {loading === true
              ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
              : randomJobArray.length !== 0 &&
                randomJobArray.map((job) => <Jobs path={"random"} selected={false} jobData={job} key={job._id}></Jobs>)}
            <Link to="details/random" className="text-decoration-none text-reset job-detail w-100">
              <div className=" border-top border-top-secondary-subtle d-flex align-items-center justify-content-center py-3 ">
                <h4 className="m-0 d-inline-block text me-2" style={{ fontSize: "15px" }}>
                  Mostra tutto
                </h4>
                <ArrowRight size={20}></ArrowRight>
              </div>
            </Link>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-between pt-3 text-secondary bg-white border border-secondary-subtle rounded-3">
            <div className="d-flex flex-column align-items-start w-100 mb-2 px-2">
              <h2 className="m-0 text-dark" style={{ fontSize: "20px" }}>
                Categoria Dev
              </h2>
              <p className="m-0" style={{ fontSize: "13px" }}>
                Sulla base delle tue preferenze
              </p>
            </div>
            {loading === true
              ? [...Array(3).keys()].map((el) => <JobsPlaceholder key={el}></JobsPlaceholder>)
              : categoryJobArray.length !== 0 &&
                categoryJobArray.map((job) => (
                  <Jobs path={"category"} selected={false} jobData={job} key={job._id}></Jobs>
                ))}
            <Link to="details/category" className="text-decoration-none text-reset job-detail w-100">
              <div className=" border-top border-top-secondary-subtle d-flex align-items-center justify-content-center py-3">
                <h4 className="m-0 d-inline-block me-2" style={{ fontSize: "15px" }}>
                  Mostra tutto
                </h4>
                <ArrowRight size={20}></ArrowRight>
              </div>
            </Link>
          </div>
        </Col>
        <Col sm={12} md={5} lg={3} className="d-flex flex-grow-1 flex-column justify-content-start align-items-center">
          <SideFooter></SideFooter>
        </Col>
      </Row>
    </Container>
  );
};

export default JobPage;

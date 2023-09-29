import { Col, Dropdown, Row } from "react-bootstrap";
import {
  Bookmark,
  BookmarkFill,
  EyeSlashFill,
  ThreeDots,
  BoxArrowUpRight,
  SendFill,
  Link45deg,
} from "react-bootstrap-icons";
import Logo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_JOB_TO_FAVOURITE, REMOVE_JOB_TO_FAVOURITE, SELECT_DESCRIPTION, SELECT_JOB } from "../../redux/actions";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import React from "react";

const Jobs = ({ path, jobData, selected }) => {
  const favouriteArray = useSelector((state) => state.favourite.list.content);
  const location = useLocation();
  const dispatch = useDispatch();

  const customDrop = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </div>
  ));

  return (
    <div
      id={selected === jobData._id || selected === true ? "selected" : ""}
      className="text-secondary job w-100 align-items-start border-bottom border-bottom-secondary-subtle py-2 ps-2"
    >
      {!location.pathname.includes("details") ? (
        <Row
          className="justify-content-between"
          onClick={() => {
            return (
              dispatch({ type: SELECT_DESCRIPTION, payload: jobData.description }),
              dispatch({ type: SELECT_JOB, payload: jobData._id })
            );
          }}
        >
          <Col xs={1}>
            <div>
              <img src={Logo} alt="Company logo" width={40} />
            </div>
          </Col>
          <Col xs={7} sm={6} className="ms-3 flex-grow-1 flex-lg-grow-1">
            <Link
              to={`/jobs/` + path + `/details/mobile/` + path + `/` + jobData._id}
              className="text-decoration-none text-reset"
            >
              {location.pathname.includes("favourite") ? (
                <h2 id="job-favourite-title" className="text-dark mb-1" style={{ fontSize: "18px" }}>
                  {jobData.title}
                </h2>
              ) : (
                <h2 className="text-primary mb-1" style={{ fontSize: "20px" }}>
                  {jobData.title}
                </h2>
              )}
              <p className="m-0 text-dark" style={{ fontSize: "12px" }}>
                {jobData.company_name}
              </p>
              <p className="mb-1 " style={{ fontSize: "12px" }}>
                {jobData.candidate_required_location}
              </p>
              <p className="m-0 " style={{ fontSize: "12px" }}>
                {jobData.publication_date.split("T")[0]}
              </p>
            </Link>
          </Col>
          {location.pathname.includes("favourite") ? (
            <Col xs={3} className="d-flex justify-content-end me-3 flex-md-grow-0 flex-lg-grow-1 flex-xl-grow-0">
              <Dropdown
                className="job-icon rounded-5 d-flex align-items-center justify-content-center m-0 "
                style={{ width: "40px", height: "40px" }}
              >
                <DropdownToggle as={customDrop}>
                  <ThreeDots size={25}></ThreeDots>
                </DropdownToggle>
                <Dropdown.Menu className="py-1">
                  <Dropdown.Item className="sidebar-dropdown text-dark">
                    <div
                      className="d-sm-flex text-secondary align-items-center justify-content-between w-100 my-1"
                      style={{ cursor: "pointer" }}
                    >
                      <BoxArrowUpRight size={18}></BoxArrowUpRight>
                      <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Candidati</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="sidebar-dropdown text-dark">
                    <div
                      className="d-sm-flex text-secondary align-items-center justify-content-between w-100 my-1"
                      style={{ cursor: "pointer" }}
                    >
                      <SendFill size={18}></SendFill>
                      <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Invia in un messaggio</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="sidebar-dropdown text-dark">
                    <div
                      className="d-sm-flex text-secondary align-items-center justify-content-between w-100 my-1"
                      style={{ cursor: "pointer" }}
                    >
                      <Link45deg size={18}></Link45deg>
                      <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Copia il link</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="sidebar-dropdown text-dark">
                    <div
                      onClick={() => dispatch({ type: REMOVE_JOB_TO_FAVOURITE, payload: jobData._id })}
                      className="d-sm-flex text-secondary align-items-center justify-content-between w-100 my-1"
                      style={{ cursor: "pointer" }}
                    >
                      <Bookmark size={18}></Bookmark>
                      <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Annulla salvataggio</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          ) : (
            <Col
              xs={3}
              sm={2}
              md={3}
              lg={2}
              className="justify-content-end text-end flex-md-grow-0 flex-lg-grow-1 flex-xl-grow-0"
            >
              <div
                className="job-icon eye-slash rounded-5 text-end m-0 d-inline-block text-center align-middle"
                style={{ width: "30px", height: "30px" }}
              >
                <EyeSlashFill size={20}></EyeSlashFill>
              </div>
              {favouriteArray.some((job) => job._id === jobData._id) ? (
                <div
                  className="job-icon rounded-5 text-end m-0 d-inline-block text-center align-middle"
                  style={{ width: "30px", height: "30px" }}
                  onClick={() => dispatch({ type: REMOVE_JOB_TO_FAVOURITE, payload: jobData._id })}
                >
                  <BookmarkFill size={20}></BookmarkFill>
                </div>
              ) : (
                <div
                  className="job-icon rounded-5 text-end m-0 d-inline-block text-center align-middle"
                  style={{ width: "30px", height: "30px" }}
                  onClick={() => dispatch({ type: ADD_JOB_TO_FAVOURITE, payload: jobData })}
                >
                  <Bookmark size={20}></Bookmark>
                </div>
              )}
            </Col>
          )}
        </Row>
      ) : (
        <Row
          className="justify-content-between"
          onClick={() => {
            dispatch({ type: SELECT_DESCRIPTION, payload: jobData.description });
            dispatch({ type: SELECT_JOB, payload: jobData._id });
          }}
        >
          <Col xs={1}>
            <div>
              <img src={Logo} alt="Company logo" width={40} />
            </div>
          </Col>
          <Col xs={7} sm={6} className="ms-3 flex-sm-grow-1">
            <h2 className="text-primary mb-1" style={{ fontSize: "20px" }}>
              {jobData.title}
            </h2>
            <p className="m-0 text-dark" style={{ fontSize: "12px" }}>
              {jobData.company_name}
            </p>
            <p className="mb-1 " style={{ fontSize: "12px" }}>
              {jobData.candidate_required_location}
            </p>
            <p className="m-0 " style={{ fontSize: "12px" }}>
              {jobData.publication_date.split("T")[0]}
            </p>
          </Col>
          <Col xs={3} className="justify-content-end text-end">
            <div
              className="job-icon eye-slash rounded-5 text-end m-0 d-inline-block text-center align-middle"
              style={{ width: "30px", height: "30px" }}
            >
              <EyeSlashFill size={20}></EyeSlashFill>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Jobs;

import { Col, Row } from "react-bootstrap";
import { Bookmark, BookmarkFill, EyeSlashFill } from "react-bootstrap-icons";
import Logo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_JOB_TO_FAVOURITE, REMOVE_JOB_TO_FAVOURITE, SELECT_DESCRIPTION, SELECT_JOB } from "../../redux/actions";
const Jobs = ({ path, jobData, selected }) => {
  const favouriteArray = useSelector((state) => state.favourite.list.content);
  const location = useLocation();
  const dispatch = useDispatch();

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
            <Link to={`details/` + path} className="text-decoration-none text-reset">
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
            </Link>
          </Col>
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

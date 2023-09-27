import { Col, Row } from "react-bootstrap";
import { Bookmark, EyeSlashFill } from "react-bootstrap-icons";
import Logo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SELECT_DESCRIPTION, SELECT_JOB } from "../../redux/actions";
const Jobs = ({ path, jobData, selected }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div
      id={selected === jobData._id || selected === true ? "selected" : ""}
      className="text-secondary job w-100 align-items-start border-bottom border-bottom-secondary-subtle py-2 ps-2"
    >
      {/* {!window.screen.availWidth <= 639 ? ( */}
      {
        !location.pathname.includes("details") ? (
          <Link to={`details/` + path} className="text-decoration-none text-reset">
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
                <div
                  className="job-icon rounded-5 text-end m-0 d-inline-block text-center align-middle"
                  style={{ width: "30px", height: "30px" }}
                >
                  <Bookmark size={20}></Bookmark>
                </div>
              </Col>
            </Row>
          </Link>
        ) : (
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
        )
        // ) : (
        //   <Link to="/jobs/details/mobile/blavla" className="text-decoration-none text-reset">
        //     <Row
        //       className="justify-content-between"
        //       onClick={() => {
        //         return (
        //           dispatch({ type: SELECT_DESCRIPTION, payload: jobData.description }),
        //           dispatch({ type: SELECT_JOB, payload: jobData._id })
        //         );
        //       }}
        //     >
        //       <Col xs={1}>
        //         <div>
        //           <img src={Logo} alt="Company logo" width={40} />
        //         </div>
        //       </Col>
        //       <Col xs={7} sm={6} className="ms-3 flex-sm-grow-1">
        //         <h2 className="text-primary mb-1" style={{ fontSize: "20px" }}>
        //           {jobData.title}
        //         </h2>
        //         <p className="m-0 text-dark" style={{ fontSize: "12px" }}>
        //           {jobData.company_name}
        //         </p>
        //         <p className="mb-1 " style={{ fontSize: "12px" }}>
        //           {jobData.candidate_required_location}
        //         </p>
        //         <p className="m-0 " style={{ fontSize: "12px" }}>
        //           {jobData.publication_date.split("T")[0]}
        //         </p>
        //       </Col>
        //       <Col xs={3} className="justify-content-end text-end">
        //         <div
        //           className="job-icon eye-slash rounded-5 text-end m-0 d-inline-block text-center align-middle"
        //           style={{ width: "30px", height: "30px" }}
        //         >
        //           <EyeSlashFill size={20}></EyeSlashFill>
        //         </div>
        //         <div
        //           className="job-icon rounded-5 text-end m-0 d-inline-block text-center align-middle"
        //           style={{ width: "30px", height: "30px" }}
        //         >
        //           <Bookmark size={20}></Bookmark>
        //         </div>
        //       </Col>
        //     </Row>
        //   </Link>
      }
    </div>
  );
};

export default Jobs;
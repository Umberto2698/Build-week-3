import { Col, Row } from "react-bootstrap";
import { Bookmark, EyeSlashFill } from "react-bootstrap-icons";
import Logo from "../assets/LinkedIn-Logos/LI-In-Bug.png";
const Jobs = ({ jobData }) => {
  return (
    <Row className="job w-100 align-items-start border-bottom border-bottom-secondary-subtle pb-2 mt-3">
      <Col lg={1}>
        <div>
          <img src={Logo} alt="Company logo" width={40} />
        </div>
      </Col>
      <Col lg={8} className="ms-3 flex-grow-1">
        <h2 className="text-primary m-0" style={{ fontSize: "20px" }}>
          {jobData.title}
        </h2>
        <p className="m-0" style={{ fontSize: "12px" }}>
          {jobData.company_name}
        </p>
        <p className="mb-1 text-secondary" style={{ fontSize: "12px" }}>
          {jobData.candidate_required_location}
        </p>
        <p className="m-0 text-secondary" style={{ fontSize: "12px" }}>
          {jobData.publication_date.split("T")[0]}
        </p>
      </Col>
      <Col lg={2} className="justify-content-end text-end">
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
  );
};

export default Jobs;

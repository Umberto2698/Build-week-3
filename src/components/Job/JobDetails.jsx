import { Badge, Button } from "react-bootstrap";
import { BoxArrowUpRight, BriefcaseFill, Building, ArrowLeft } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";

const JobDetails = ({ category, jobData }) => {
  const params = useParams();

  return (
    <div className="d-flex flex-column align-items-center justify-content-start mb-3">
      <div className="job w-100 text-dark d-flex align-items-start justify-content-between mt-2 pe-2">
        <h1 className="m-0 d-inline-block fs-3">{jobData.title} </h1>
        {window.screen.availWidth <= 639 && (
          <Link to={`/jobs/` + params.query + `/details/` + category} className="d-md-none ms-2 text-reset">
            <ArrowLeft size={30}></ArrowLeft>
          </Link>
        )}
      </div>
      <div className="text-start w-100 mt-2 mb-4">
        <p className="m-0 text-secondary" style={{ fontSize: "14px" }}>
          <span className="me-1">{jobData.company_name}</span>
          <span className="mx-1">{jobData.candidate_required_location}</span>
          <span className="ms-1">{jobData.publication_date.split("T")[0]}</span>
        </p>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-start w-100 mb-4">
        <div className="d-flex align-items-center justify-content-start w-100 mb-2">
          <BriefcaseFill size={20} className="me-2 text-secondary"></BriefcaseFill>
          <h6 className="d-inline-block m-0 me-1">
            <Badge className="customBadge">{jobData.job_type}</Badge>
          </h6>
          <h6 className="d-inline-block m-0">
            <Badge className="customBadge">{jobData.category}</Badge>
          </h6>
        </div>
        <div className="d-flex align-items-center justify-content-start w-100">
          <Building size={20} className="me-2 text-secondary"></Building>
          <span className="text-dark" style={{ fontSize: "14px" }}>
            5001 - 10.000 dipendenti
          </span>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-start w-100">
        <Button id="candidatureBtn" className="me-2 rounded-pill">
          <div className="d-flex align-items-center justify-content-between ">
            <span className="text-center me-2 fs-6 fw-medium flex-grow-1">Candidati</span>
            <BoxArrowUpRight size={15} className="fw-bold"></BoxArrowUpRight>
          </div>
        </Button>
        <Button id="saveBtn" variant="outline-primary" className=" rounded-pill">
          <div className="d-flex align-items-center justify-content-center ">
            <span className="fw-medium fs-6 mx-2 text-center ">Salva</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default JobDetails;

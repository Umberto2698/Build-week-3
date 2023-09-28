import { Image } from "react-bootstrap";

const SingleExperience = ({ exp }) => {
  return (
    <div className="d-flex gap-2">
      <div style={{ height: "48px", width: "48px" }}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="logo-linkedin"
          fluid
        />
      </div>
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>{exp.role}</h4>
        <p style={{ fontSize: "14px" }}>
          {exp.company} • {exp.area}
        </p>
        <p style={{ fontSize: "14px" }}>
          {exp.startDate} - {exp.endDate} • (tempo trascorso)
        </p>
      </div>
    </div>
  );
};

export default SingleExperience;

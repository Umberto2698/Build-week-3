import Analisi from "./SubMainSection/Analisi";
import Risorse from "./SubMainSection/Risorse";
import Activity from "./SubMainSection/Activity";
import Experience from "./SubMainSection/Experience";
import { useParams } from "react-router-dom";

const ProfilePageSubMainSection = () => {
  const params = useParams();
  return (
    <div className="d-flex flex-column gap-2">
      {!params.id && (
        <>
          <Analisi />
          <Risorse />
        </>
      )}
      <Activity />
      <Experience />
    </div>
  );
};

export default ProfilePageSubMainSection;

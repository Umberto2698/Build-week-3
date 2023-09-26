import Analisi from "./SubMainSection/Analisi";
import Risorse from "./SubMainSection/Risorse";
import Activity from "./SubMainSection/Activity";
import Experience from "./SubMainSection/Experience";

const ProfilePageSubMainSection = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <Analisi />
      <Risorse />
      <Activity />
      <Experience />
    </div>
  );
};

export default ProfilePageSubMainSection;

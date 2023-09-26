import DiscMore from "./SideSection/DiscMore";
import Friends from "./SideSection/Friends";
import LangUrl from "./SideSection/LangUrl";

const ProfilePageSideSection = () => {
  return (
    <div className="side-section">
      <LangUrl />
      <Friends />
      <DiscMore />
    </div>
  );
};

export default ProfilePageSideSection;

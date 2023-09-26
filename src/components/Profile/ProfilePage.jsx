import ProfilePageHeroSection from "./ProfilePageHeroSection";
import ProfilePageSideSection from "./ProfilePageSideSection";
import ProfilePageSubMainSection from "./ProfilePageSubMainSection";

const ProfilePage = () => {
  return (
    <div id="profile-page">
      <div className="d-flex flex-column gap-2">
        <ProfilePageHeroSection />
        <ProfilePageSubMainSection />
      </div>
      <ProfilePageSideSection />
    </div>
  );
};

export default ProfilePage;
import MainContent from "./HeroSection/MainContent";
import UserBanner from "./HeroSection/UserBanner";

const ProfilePageHeroSection = () => {
  return (
    <div className="main-section">
      <UserBanner />
      <MainContent />
    </div>
  );
};

export default ProfilePageHeroSection;

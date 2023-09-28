import { useDispatch } from "react-redux";
import MainContent from "./HeroSection/MainContent";
import UserBanner from "./HeroSection/UserBanner";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserProfileAction } from "../../redux/actions";

const ProfilePageHeroSection = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getUserProfileAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="main-section">
      <UserBanner />
      <MainContent />
    </div>
  );
};

export default ProfilePageHeroSection;

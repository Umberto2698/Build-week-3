import ProfilePageHeroSection from "./ProfilePageHeroSection";
import ProfilePageSideSection from "./ProfilePageSideSection";
import ProfilePageSubMainSection from "./ProfilePageSubMainSection";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { getUserProfileAction } from "../../redux/actions";

const ProfilePage = () => {
  // const dispatch = useDispatch()
  const isLoadingProfiles = useSelector((state) => state.profiles.isLoadingProfiles);

  const isLoadingMyProfile = useSelector((state) => state.profiles.isLoadingMyProfile);

  return (
    <>
      {isLoadingProfiles || isLoadingMyProfile ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", width: "100%" }}>
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div id="profile-page">
          <div id="profile-container" className="d-flex flex-column align-items-center gap-2">
            <ProfilePageHeroSection />
            <ProfilePageSubMainSection />
          </div>
          <ProfilePageSideSection />
        </div>
      )}
    </>
  );
};

export default ProfilePage;

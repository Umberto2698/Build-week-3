import { useEffect } from "react";
import ProfilePageHeroSection from "./ProfilePageHeroSection";
import ProfilePageSideSection from "./ProfilePageSideSection";
import ProfilePageSubMainSection from "./ProfilePageSubMainSection";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfilesAction, getMyProfileAction } from "../../redux/actions";
import { Spinner } from "react-bootstrap";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isLoadingProfiles = useSelector(
    (state) => state.profiles.isLoadingProfiles
  );

  const isLoadingMyProfile = useSelector(
    (state) => state.profiles.isLoadingMyProfile
  );

  // const fetchMyProfile = async () => {}

  useEffect(() => {
    dispatch(getAllProfilesAction());
    dispatch(getMyProfileAction());
    // fetchMyProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoadingProfiles || isLoadingMyProfile ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh", width: "100%" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <div id="profile-page">
          <div className="d-flex flex-column gap-2">
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

import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserBanner = () => {
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const userProfile = useSelector((state) => state.profiles.userProfile);
  return (
    <div id="user-banner">
      <i className="bi bi-camera-fill pp"></i>
      <div className="img-wrapper">
        <Image
          src={userProfile ? userProfile.image : myProfile.image}
          alt="img-profile"
          fluid
        />
      </div>
    </div>
  );
};

export default UserBanner;

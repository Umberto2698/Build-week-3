import { Button, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCurrentExperienceAction,
  getUserProfileAction,
} from "../../../redux/actions";

const SingleFriend = ({ profile }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-friend">
      {/* <i className="bi bi-person-circle"></i> */}
      <Link
        onClick={() => {
          dispatch(getUserProfileAction(profile._id));
          dispatch(getCurrentExperienceAction(profile._id));
        }}
        to={`/profile/${profile._id}`}
      >
        <Image
          src={profile.image}
          alt="img-profile"
          style={{
            maxWidth: "48px",
            maxHeight: "48px",
            minWidth: "48px",
            minHeight: "48px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        />
      </Link>
      <div className="d-flex flex-column gap-1">
        <Link
          onClick={() => dispatch(getUserProfileAction(profile._id))}
          to={`/profile/${profile._id}`}
        >
          <h2 style={{ fontSize: "16px" }}>
            {profile.name}
            {profile.surname}
          </h2>
        </Link>
        <p style={{ fontSize: "14px" }}>{profile.title}</p>
        <div className="py-2">
          <Button size="sm" className="my-btn forFriend">
            <i className="bi bi-person-plus-fill"></i>
            Collegati
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;

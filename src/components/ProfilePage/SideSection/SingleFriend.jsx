import { Button, Image } from "react-bootstrap";

const SingleFriend = ({ profile }) => {
  return (
    <div className="single-friend">
      {/* <i className="bi bi-person-circle"></i> */}
      <Image
        src={profile.image}
        alt="img-profile"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      />
      <div className="d-flex flex-column gap-1">
        <h2 style={{ fontSize: "16px" }}>
          {profile.name}
          {profile.surname}
        </h2>
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

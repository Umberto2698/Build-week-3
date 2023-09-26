import { Button } from "react-bootstrap";

const SingleFriendStatic = ({ profile }) => {
  return (
    <div className="single-friend">
      <i className="bi bi-person-circle"></i>
      {/* <div style={{ width: "48px", height: "48px", borderRadius: "50%", overflow: "hidden" }}>
      </div> */}
      <div className="d-flex flex-column gap-1">
        <h2 style={{ fontSize: "16px" }}>Stefano Miceli</h2>
        <p style={{ fontSize: "14px" }}>Web developer presso Epicode</p>
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

export default SingleFriendStatic;

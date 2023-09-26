import { useSelector } from "react-redux";
import SingleFriend from "./SingleFriend";

const Friends = () => {
  const profiles = useSelector((state) => state.profiles.all);
  return (
    <div className="friends">
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>Persone che potresti conoscere</h4>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
          Dalla tua azienda
        </p>
      </div>
      <div className="d-flex flex-column">
        {[...Array(5).keys()].map((elem, index) => (
          <SingleFriend key={elem} profile={profiles[index]} />
        ))}
      </div>
    </div>
  );
};

export default Friends;

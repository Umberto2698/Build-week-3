import SingleFriend from "./SingleFriend";

const Friends = () => {
  return (
    <div className="friends">
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>Persone che potresti conoscere</h4>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
          Dalla tua azienda
        </p>
      </div>
      <div className="d-flex flex-column">
        {[...Array(5).keys()].map((elem) => (
          <SingleFriend key={elem} />
        ))}
      </div>
    </div>
  );
};

export default Friends;

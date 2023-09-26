import SingleFriendStatic from "./SingleFriendStatic";

const DiscMore = () => {
  return (
    <div className="disc-more">
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>Potrebbe interessarti</h4>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
          Pagine per te
        </p>
      </div>
      <div className="d-flex flex-column">
        {[...Array(2).keys()].map((elem) => (
          <SingleFriendStatic key={elem} />
        ))}
      </div>
    </div>
  );
};

export default DiscMore;

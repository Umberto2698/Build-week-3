import PenSVG from "../Svgs/PenSVG";

const LangUrl = () => {
  return (
    <div className="lang-url">
      <div
        className="d-flex flex-column pb-3"
        style={{
          borderBottom: "1px solid var(--mid-grey)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h4 style={{ fontSize: "18px" }}>Lingua del profilo</h4>
          <span className="SVG-click">
            <PenSVG />
          </span>
        </div>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>Italiano</p>
      </div>
      <div className="d-flex flex-column pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4 style={{ fontSize: "18px" }}>Public profile & URL</h4>
          <span className="SVG-click">
            <PenSVG />
          </span>
        </div>
        <p style={{ fontSize: "14px", color: "rgb(180, 180, 180)" }}>Public</p>
      </div>
    </div>
  );
};

export default LangUrl;

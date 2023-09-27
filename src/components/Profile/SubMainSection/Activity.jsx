import { Button } from "react-bootstrap";
import PenSVG from "../Svgs/PenSVG";
import ArrowSVG from "../Svgs/ArrowSVG";

const Activity = () => {
  return (
    <div className="horz-card-block">
      <div
        className="d-flex justify-content-between"
        style={{
          paddingInline: "24px",
          paddingTop: "24px",
        }}
      >
        <div className="d-flex flex-column">
          <h3 style={{ fontSize: "20px" }}>Attività</h3>
          <p
            style={{
              fontSize: "15px",
              color: "var(--mainColor)",
              fontWeight: 600,
            }}
          >
            0 follower
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Button size="sm" className="my-btn">
            Crea un post
          </Button>
          <span className="SVG-click">
            <PenSVG />
          </span>
        </div>
      </div>
      <div
        className="d-flex flex-column"
        style={{
          paddingInline: "24px",
          paddingBlock: "12px",
        }}
      >
        <div className="d-flex  gap-2">
          <div className="d-flex flex-column">
            <h4 style={{ fontSize: "16px" }}>
              Non hai ancora pubblicato nulla
            </h4>
            <p style={{ fontSize: "14px" }}>
              I post che condividi appariranno qui
            </p>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center gap-1 show-more"
        style={{
          borderTop: "1px solid var(--mid-grey)",
          paddingBlock: "12px",
          color: "var(--grey)",
        }}
      >
        <span style={{ fontWeight: 600 }}> Mostra tutte le attività </span>{" "}
        <ArrowSVG />
      </div>
    </div>
  );
};

export default Activity;

import { Button } from "react-bootstrap";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
          </svg>
        </div>
      </div>
      <div
        className="d-flex flex-column"
        style={{
          paddingInline: "24px",
          paddingBlock: "12px",
        }}
      >
        <div
          className="d-flex  gap-2"
          style={{
            paddingTop: "12px",
          }}
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="mercado-match"
          data-supported-dps="16x16"
          fill="currentColor"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Activity;

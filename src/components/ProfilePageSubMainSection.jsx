import { Badge, Button } from "react-bootstrap";

const ProfilePageSubMainSection = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <div className="horz-card-block">
        <div
          className="d-flex flex-column"
          style={{ paddingInline: "24px", paddingTop: "24px" }}
        >
          <h3 style={{ fontSize: "20px" }}>Analisi</h3>
          <div className="d-flex gap-1 align-items-center">
            <i className="bi bi-eye-fill" style={{ color: "var(--grey)" }}></i>
            <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
              Solo per te
            </p>
          </div>
        </div>
        <div
          className="d-flex gap-2"
          style={{
            paddingInline: "24px",
            paddingTop: "12px",
            paddingBottom: "24px",
          }}
        >
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
            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
          </svg>
          <div className="d-flex flex-column" style={{ maxWidth: "204px" }}>
            <h4 style={{ fontSize: "16px" }}>0 visualizzazioni del profilo</h4>
            <p style={{ fontSize: "14px" }}>
              Aggiorna il tuo profilo per attrarre visitatori.
            </p>
          </div>
        </div>
      </div>
      <div className="horz-card-block">
        <div
          className="d-flex flex-column"
          style={{
            paddingInline: "24px",
            paddingTop: "24px",
          }}
        >
          <h3 style={{ fontSize: "20px" }}>Risorse</h3>
          <div className="d-flex gap-1 align-items-center">
            <i className="bi bi-eye-fill" style={{ color: "var(--grey)" }}></i>
            <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
              Solo per te
            </p>
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
              paddingBlock: "12px",
              borderBottom: "1px solid var(--mid-grey)",
            }}
          >
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
              <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
            </svg>
            <div className="d-flex flex-column">
              <h4 style={{ fontSize: "16px" }}>
                Modalità creazione di contenuti
                <Badge bg="secondary" className="ms-2">
                  No
                </Badge>
              </h4>
              <p style={{ fontSize: "14px" }}>
                Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                accedi agli strumenti di creazione
              </p>
            </div>
          </div>
          <div
            className="d-flex gap-2"
            style={{
              paddingBlock: "12px",
            }}
          >
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
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <div className="d-flex flex-column">
              <h4 style={{ fontSize: "16px" }}>La mia rete</h4>
              <p style={{ fontSize: "14px" }}>
                Salva e gestisci i tuoi collegamenti e interessi.
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
          <span style={{ fontWeight: 600 }}> Mostra tutte le risorse (5)</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            class="mercado-match"
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
            class="mercado-match"
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
      <div className="horz-card-block">
        <div
          className="d-flex justify-content-between"
          style={{
            paddingInline: "24px",
            paddingTop: "24px",
          }}
        >
          <h3 style={{ fontSize: "20px" }}>Esperienza</h3>
          <div className="d-flex align-items-center gap-3">
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
              <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg>
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
                Le esperienze che condividi appariranno qui
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
            class="mercado-match"
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
    </div>
  );
};

export default ProfilePageSubMainSection;

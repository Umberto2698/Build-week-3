import { Badge } from "react-bootstrap";
import ArrowSVG from "../Svgs/ArrowSVG";
import AntennaSVG from "../Svgs/AntennaSVG";
import PeopleSVG from "../Svgs/PeopleSVG";

const Risorse = () => {
  return (
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
          <AntennaSVG />
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
          <PeopleSVG />
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
        <ArrowSVG />
      </div>
    </div>
  );
};

export default Risorse;

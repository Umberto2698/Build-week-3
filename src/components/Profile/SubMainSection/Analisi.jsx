import PeopleSVG from "../Svgs/PeopleSVG";

const Analisi = () => {
  return (
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
        <PeopleSVG />
        <div className="d-flex flex-column" style={{ maxWidth: "204px" }}>
          <h4 style={{ fontSize: "16px" }}>0 visualizzazioni del profilo</h4>
          <p style={{ fontSize: "14px" }}>
            Aggiorna il tuo profilo per attrarre visitatori.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Analisi;

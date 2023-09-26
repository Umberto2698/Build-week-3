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
  );
};
export default Analisi;

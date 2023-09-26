import ProfilePageSingleFriend from "./ProfilePageSingleFriend";

const ProfilePageSideSection = () => {
  return (
    <div className="side-section">
      <div className="lang-url">
        <div
          className="d-flex flex-column pb-3"
          style={{
            borderBottom: "1px solid var(--mid-grey)",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h4 style={{ fontSize: "18px" }}>Lingua del profilo</h4>
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
          <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>Italiano</p>
        </div>
        <div className="d-flex flex-column pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 style={{ fontSize: "18px" }}>Public profile & URL</h4>
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
          <p style={{ fontSize: "14px", color: "rgb(180, 180, 180)" }}>
            www.linkedin.com/in/angelo-moreno-0422a0293
          </p>
        </div>
      </div>
      <div className="friends">
        <div className="d-flex flex-column">
          <h4 style={{ fontSize: "16px" }}>Persone che potresti conoscere</h4>
          <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
            Dalla tua azienda
          </p>
        </div>
        <div className="d-flex flex-column">
          {[...Array(5).keys()].map((elem) => (
            <ProfilePageSingleFriend key={elem} />
          ))}
        </div>
      </div>
      <div className="disc-more">
        <div className="d-flex flex-column">
          <h4 style={{ fontSize: "16px" }}>Potrebbe interessarti</h4>
          <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
            Pagine per te
          </p>
        </div>
        <div className="d-flex flex-column">
          {[...Array(2).keys()].map((elem) => (
            <ProfilePageSingleFriend key={elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageSideSection;

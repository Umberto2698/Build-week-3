import { Button } from "react-bootstrap";
import { BellFill, BookmarkFill, Clipboard2Check, GearFill, PencilSquare, Youtube } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <div className="position-sticky top-0">
      <div className=" d-flex flex-column align-items-start justify-content-between p-3 mb-3 bg-white border border-secondary-subtle rounded-3">
        <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
          <BookmarkFill size={20}></BookmarkFill>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Le mie offerte di lavoro</span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
          <BellFill size={20}></BellFill>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Avvisi offerte di lavoro</span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
          <Clipboard2Check size={20}></Clipboard2Check>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Valutazioni delle competenze</span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
          <Youtube size={20}></Youtube>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Indicazioni per chi cerca lavoro</span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 my-2" style={{ cursor: "pointer" }}>
          <GearFill size={20}></GearFill>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Impostatzioni candidatura</span>
        </div>
      </div>
      <div>
        <Button id="publishJob" variant="outline-primary light" size="lg" className="w-100">
          <div className="d-flex align-items-center justify-content-between">
            <PencilSquare size={20} className="fw-bold"></PencilSquare>
            <span className="text-center ms-1 px-3 fs-6 fw-medium flex-grow-1">Pubblica offerta gratuita</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

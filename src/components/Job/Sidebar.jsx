import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { BellFill, BookmarkFill, Clipboard2Check, GearFill, PencilSquare, Youtube } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const params = useParams();

  return (
    <div className="position-sticky" style={{ top: "65px" }}>
      <div className=" d-flex flex-column align-items-start justify-content-between py-1 ps-3 pe-2 p-md-3 mb-3 bg-white border border-secondary-subtle rounded-3">
        <div
          className="d-flex align-items-center text-dark justify-content-between w-100 my-2"
          style={{ cursor: "pointer" }}
        >
          <Link
            to={`/jobs/` + params.query + `/favourite/`}
            className="text-decoration-none text-reset d-flex align-items-center"
          >
            <BookmarkFill size={20}></BookmarkFill>
            <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Le mie offerte di lavoro</span>
          </Link>
          <Dropdown as={ButtonGroup} className="bg-white border-0">
            <Dropdown.Toggle className="d-sm-flex align-items-center justify-content-between d-md-none border-0 bg-secondary-subtle text-secondary">
              Altro
            </Dropdown.Toggle>
            <Dropdown.Menu className="py-1">
              <Dropdown.Item className="sidebar-dropdown text-dark">
                <div
                  className="d-sm-flex d-md-none align-items-center justify-content-between w-100 my-1"
                  style={{ cursor: "pointer" }}
                >
                  <BellFill size={20}></BellFill>
                  <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Avvisi offerte di lavoro</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="sidebar-dropdown text-dark">
                <div
                  className="d-sm-flex d-md-none align-items-center justify-content-between w-100 my-1"
                  style={{ cursor: "pointer" }}
                >
                  <Clipboard2Check size={20}></Clipboard2Check>
                  <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Valutazioni delle competenze</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="sidebar-dropdown text-dark">
                <div
                  className="d-sm-flex d-md-none align-items-center justify-content-between w-100 my-1"
                  style={{ cursor: "pointer" }}
                >
                  <Youtube size={20}></Youtube>
                  <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Indicazioni per chi cerca lavoro</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Item className="sidebar-dropdown text-dark">
                <div
                  className="d-sm-flex d-md-none align-items-center justify-content-between w-100 my-1"
                  style={{ cursor: "pointer" }}
                >
                  <GearFill size={20}></GearFill>
                  <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Impostatzioni candidatura</span>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider className="text-secondary" />
              <Dropdown.Item className="sidebar-dropdown text-dark">
                <div
                  className="d-sm-flex d-md-none align-items-center justify-content-between w-100 mb-1"
                  style={{ cursor: "pointer" }}
                >
                  <PencilSquare size={20}></PencilSquare>
                  <span className="text-start ms-2 fs-6 fw-medium flex-grow-1">Pubblica offerta gratuita</span>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-between w-100 my-2"
          style={{ cursor: "pointer" }}
        >
          <BellFill size={20}></BellFill>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Avvisi offerte di lavoro</span>
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-between w-100 my-2"
          style={{ cursor: "pointer" }}
        >
          <Clipboard2Check size={20}></Clipboard2Check>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Valutazioni delle competenze</span>
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-between w-100 my-2"
          style={{ cursor: "pointer" }}
        >
          <Youtube size={20}></Youtube>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Indicazioni per chi cerca lavoro</span>
        </div>
        <div
          className="d-none d-md-flex align-items-center justify-content-between w-100 my-2"
          style={{ cursor: "pointer" }}
        >
          <GearFill size={20}></GearFill>
          <span className="text-start ms-3 fs-6 fw-medium flex-grow-1">Impostatzioni candidatura</span>
        </div>
      </div>
      <div className="d-none d-md-block">
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

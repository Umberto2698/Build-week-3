import { Col } from "react-bootstrap";
import HomeLeftSidebarTop from "./HomeLeftSidebarTop";

const HomeLeftSidebarContainer = () => {
  return (
    <Col xs={12} md={3} className="section">
      <HomeLeftSidebarTop />
    </Col>
  );
};

export default HomeLeftSidebarContainer;

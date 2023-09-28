import { Col } from "react-bootstrap";
import HomeLeftSidebarTop from "./HomeLeftSidebarTop";
import HomeLeftSidebarBottom from "./HomeLeftSidebarBottom";

const HomeLeftSidebarContainer = () => {
  return (
    <Col xs={12} md={3}>
      <HomeLeftSidebarTop />
      <HomeLeftSidebarBottom />
    </Col>
  );
};

export default HomeLeftSidebarContainer;

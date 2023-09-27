import { Container, Row, Col, Card, Placeholder, Button } from "react-bootstrap";
import { HandThumbsUp, HandThumbsUpFill, ThreeDots, X } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const HomeSinglePost = () => {
  const loading = useSelector(state => state.user.isLoading);

  return (
    <>
      {!loading ? (
        <Card className="bg-white rounded-2 mb-2 p-3" style={{ minHeight: "100px" }}>
          <Container className="p-0">
            <Row className="mb-2">
              <Col xs={2} className="pe-0 me-2" style={{ width: "48px" }}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/people-57/24/user-square-512.png"
                  width={48}
                  height={48}
                  alt="user"
                />
              </Col>
              <Col xs={8} className="me-auto">
                <div className="d-flex justify-content-between">
                  <div className="text-truncate overflow-hidden fw-medium" style={{ fontSize: "0.9rem" }}>
                    usernameaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </div>
                </div>
                <div className="text-secondary" style={{ fontSize: "0.7rem" }}>
                  orario
                </div>
              </Col>
              <Col xs={2} className="ps-0">
                <div className="d-flex">
                  <span id="post-btn" className="rounded-circle d-flex justify-content-center align-middle p-1 me-2">
                    <ThreeDots fontSize={20} className="m-auto" />
                  </span>
                  <span id="post-btn" className="rounded-circle d-flex justify-content-center align-middle p-1">
                    <X fontSize={20} className="m-auto" />
                  </span>
                </div>
              </Col>
            </Row>
            <div className="border-bottom pb-2" style={{ fontSize: "0.9rem" }}>
              testo post
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Button className="d-flex">
                <HandThumbsUp className="m-auto me-1" />
                Consiglia
              </Button>
              <Button className="d-flex">
                <HandThumbsUp className="m-auto me-1" />
                Commenta
              </Button>
              <Button className="d-flex">
                <HandThumbsUp className="m-auto me-1" />
                Diffondi il post
              </Button>
              <Button className="d-flex">
                <HandThumbsUp className="m-auto me-1" />
                Invia
              </Button>
            </div>
          </Container>
        </Card>
      ) : (
        <>
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
        </>
      )}
    </>
  );
};

export default HomeSinglePost;

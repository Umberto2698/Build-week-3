import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ChatRightText, HandThumbsUp, SendFill, ThreeDots, X } from "react-bootstrap-icons";
import TimeConverter from "./TimeConverter";
import { useState } from "react";

const HomeSinglePost = ({ post }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDeleteClick = () => {
    setIsVisible(false);
  };
  return isVisible ? (
    <>
      <Card className="bg-white rounded-2 mb-2 p-3 pb-1">
        <Container className="p-0">
          <Row className="mb-2">
            <Col xs={2} className="pe-0 me-2" style={{ width: "48px" }}>
              <img src={post.user.image} width={48} height={48} alt="user" />
            </Col>
            <Col xs={8} className="me-auto">
              <div className="d-flex justify-content-between">
                <div className="text-truncate overflow-hidden fw-medium" style={{ fontSize: "0.9rem" }}>
                  {post.username}
                </div>
              </div>
              <div className="text-secondary" style={{ fontSize: "0.7rem" }}>
                <TimeConverter createdAt={post.createdAt} />
              </div>
            </Col>
            <Col xs={2} className="ps-0">
              <div className="d-flex justify-content-end">
                <span
                  id="post-btn-delete"
                  className="rounded-circle d-flex justify-content-center align-middle p-1 me-2"
                >
                  <ThreeDots fontSize={20} className="m-auto" />
                </span>
                <span
                  id="post-btn-delete"
                  className="rounded-circle d-flex justify-content-center align-middle p-1"
                  onClick={handleDeleteClick}
                >
                  <X fontSize={20} className="m-auto" />
                </span>
              </div>
            </Col>
          </Row>
          <div className="border-bottom pb-2" style={{ fontSize: "0.9rem" }}>
            {post.text}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button id="post-btn" className="d-flex flex-wrap text-secondary">
              <HandThumbsUp className="m-auto pe-1" size={25} />
              <span className="m-auto" style={{ fontSize: "0.8rem" }}>
                Consiglia
              </span>
            </Button>
            <Button id="post-btn" className="d-flex flex-wrap text-secondary">
              <ChatRightText className="m-auto pe-1" size={25} />
              <span className="m-auto" style={{ fontSize: "0.8rem" }}>
                Commenta
              </span>
            </Button>
            <Button id="post-btn" className="d-flex flex-wrap text-secondary">
              <FontAwesomeIcon icon={faRetweet} className="m-auto pe-1" style={{ width: "25px" }} />
              <span className="m-auto" style={{ fontSize: "0.8rem" }}>
                Diffondi il post
              </span>
            </Button>
            <Button id="post-btn" className="d-flex flex-wrap text-secondary">
              <SendFill className="m-auto pe-1" size={25} />
              <span className="m-auto" style={{ fontSize: "0.8rem" }}>
                Invia
              </span>
            </Button>
          </div>
        </Container>
      </Card>
    </>
  ) : null;
};

export default HomeSinglePost;

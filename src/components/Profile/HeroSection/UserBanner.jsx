import { useState } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modifyImageProfileAction } from "../../../redux/actions";

const UserBanner = () => {
  const myProfile = useSelector((state) => state.profiles.myProfile);
  const currentProfile = useSelector((state) => state.profiles.currentProfile);
  const dispatch = useDispatch();
  const params = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState(new FormData());

  const onFileChange = (e) => {
    if (e.target && e.target.files[0]) {
      formData.append("profile", e.target.files[0]);
      setFormData(formData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(modifyImageProfileAction(myProfile._id, formData));
  };

  return (
    <div id="user-banner">
      {!params.id && <i className="bi bi-camera-fill pp"></i>}
      {!params.id ? (
        <div className="img-wrapper">
          <Image
            src={currentProfile.image}
            alt="img-profile"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
            }}
            onClick={handleShow}
          />
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica l'immagine del profilo</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                padding: "8px 24px 16px",
                maxHeight: "725px",
                overflowY: "scroll",
              }}
            >
              <p style={{ fontSize: "12px", margin: "0" }}>
                * Indica che è obbligatorio
              </p>
              <Form className="pt-4" onSubmit={handleSubmit}>
                <div className="pb-4">
                  <Form.Label className="my-label">
                    Immagine profilo*
                  </Form.Label>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Scegli la tua immagine profilo</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => onFileChange(e)}
                    />
                  </Form.Group>
                </div>
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Salva
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <div className="img-wrapper">
          <Image
            src={currentProfile.image}
            alt="img-profile"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UserBanner;

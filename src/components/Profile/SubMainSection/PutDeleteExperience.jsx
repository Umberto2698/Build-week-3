import { useDispatch, useSelector } from "react-redux";
import SingleExperience from "./SingleExperience";
import { Button } from "react-bootstrap";
import { deleteMyExperienceAction } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";

const PutDeleteExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.profiles.experience);
  const myProfile = useSelector((state) => state.profiles.myProfile);

  const handleDelete = (expId) => {
    const confirmation = window.confirm(
      "Sei sicuro di voler eliminare questa esperienza?"
    );
    if (confirmation) {
      dispatch(deleteMyExperienceAction(myProfile._id, expId));
    }
  };

  return (
    <div className="horz-card-block gap-2" style={{ marginTop: "70px" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          paddingInline: "24px",
          paddingTop: "18px",
        }}
      >
        <h3 style={{ fontSize: "24px" }}>Esperienze</h3>
      </div>
      <div
        className="d-flex flex-column"
        style={{
          paddingInline: "24px",
          paddingBlock: "12px",
        }}
      >
        {experience.length === 0 ? (
          <div className="d-flex gap-2">
            <div className="d-flex flex-column">
              <h4 style={{ fontSize: "16px" }}>
                Non hai ancora pubblicato nulla
              </h4>
              <p style={{ fontSize: "14px" }}>
                Le esperienze che condividi appariranno qui
              </p>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column gap-4">
            {experience.map((elem) => (
              <div
                key={`experience-${elem._id}`}
                className="d-flex justify-content-between "
              >
                <SingleExperience exp={elem} />
                <div className="d-flex gap-3 align-items-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate(`/profile/experience/details/${elem._id}`);

                      //   setQuery({
                      //     role: elem.role,
                      //     company: elem.company,
                      //     startDate: elem.startDate,
                      //     endDate: elem.endDate, // could be null
                      //     description: elem.description,
                      //     area: elem.area,
                      //   });
                    }}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(elem._id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PutDeleteExperience;

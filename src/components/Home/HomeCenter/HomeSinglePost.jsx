import { Card, Placeholder } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomeSinglePost = () => {
  const loading = useSelector(state => state.user.isLoading);

  return (
    <>
      {!loading ? (
        <Card className="bg-white rounded- mb-2" style={{ minHeight: "100px" }}></Card>
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

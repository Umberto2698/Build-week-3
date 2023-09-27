import { useEffect } from "react";
import HomeSinglePost from "./HomeSinglePost";
import { getPostsAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const HomePostContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeSinglePost />
    </>
  );
};

export default HomePostContainer;

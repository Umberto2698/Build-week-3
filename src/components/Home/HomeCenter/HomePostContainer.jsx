import { useEffect } from "react";
import HomeSinglePost from "./HomeSinglePost";
import { getHomePosts, setRandomIndexes } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";

const HomePostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.homePosts.content);
  const loading = useSelector(state => state.homePosts.isLoading);
  const randomIndexes = useSelector(state => state.homePosts.randomIndexes);
  const numRandomPosts = 5;

  const getRandomIndexes = () => {
    const allIndexes = Array.from({ length: posts?.length }, (_, i) => i);
    const remainingIndexes = allIndexes.filter(index => !randomIndexes.includes(index));

    const newIndexes = [];
    while (newIndexes.length < numRandomPosts && remainingIndexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
      newIndexes.push(remainingIndexes.splice(randomIndex, 1)[0]);
    }

    dispatch(setRandomIndexes([...randomIndexes, ...newIndexes]));
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(getHomePosts());
    };

    if (!posts || posts.length === 0) {
      fetchData();
    } else {
      getRandomIndexes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, posts]);

  const handleShowMoreClick = () => {
    if (posts?.length > 0) {
      getRandomIndexes();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setRandomIndexes([]));
    };
  }, []);

  return (
    <>
      {posts && !loading ? (
        <div>
          {randomIndexes.map(randomIndex => (
            <HomeSinglePost key={posts[randomIndex]._id} post={posts[randomIndex]} />
          ))}
          <div className="text-center">
            <Button
              id="posts-show-more"
              variant="outline-primary"
              className="rounded-pill text-primary px-3 py-1 my-3"
              onClick={handleShowMoreClick}
            >
              Vedi nuovi post
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-3 text-center">
            <Spinner variant="dark" />
          </div>
        </>
      )}
    </>
  );
};

export default HomePostContainer;

import { useEffect, useState } from "react";
import HomeSinglePost from "./HomeSinglePost";
import { getHomePosts } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Placeholder, Spinner } from "react-bootstrap";

const HomePostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.homePosts.content);
  const loading = useSelector(state => state.homePosts.isLoading);
  const [randomIndexes, setRandomIndexes] = useState([]);
  const numRandomPosts = 5;

  useEffect(() => {
    dispatch(getHomePosts());
  }, []);

  const getRandomIndexes = () => {
    const allIndexes = Array.from({ length: posts.length }, (_, i) => i);
    const remainingIndexes = allIndexes.filter(index => !randomIndexes.includes(index));

    const newIndexes = [];
    while (newIndexes.length < numRandomPosts && remainingIndexes.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingIndexes.length);
      newIndexes.push(remainingIndexes.splice(randomIndex, 1)[0]);
    }

    setRandomIndexes(prevIndexes => [...prevIndexes, ...newIndexes]);
  };

  useEffect(() => {
    if (posts?.length > 0) {
      getRandomIndexes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  const handleShowMoreClick = () => {
    if (posts?.length > 0) {
      getRandomIndexes();
    }
  };

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
            {" "}
            <Spinner variant="dark" />
          </div>
        </>
      )}
    </>
  );
};

export default HomePostContainer;

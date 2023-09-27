import { useEffect, useState } from "react";
import HomeSinglePost from "./HomeSinglePost";
import { getHomePosts } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Placeholder } from "react-bootstrap";

const HomePostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.homePosts.content);
  const loading = useSelector(state => state.user.isLoading);
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    dispatch(getHomePosts());
  }, []);

  useEffect(() => {
    if (posts?.length > 0) {
      const randomIndex = Math.floor(Math.random() * posts?.length);
      const randomPostsSlice = posts.slice(randomIndex, randomIndex + 5);
      setRandomPosts(randomPostsSlice);
    }
  }, [posts]);

  const handleShowMoreClick = () => {
    if (posts?.length > 0) {
      const randomIndex = Math.floor(Math.random() * posts?.length);
      const randomPostsSlice = posts.slice(randomIndex, randomIndex + 5);
      setRandomPosts(prevRandomPosts => [...prevRandomPosts, ...randomPostsSlice]);
    }
  };

  return (
    <>
      {posts && !loading ? (
        <div>
          {randomPosts.map(post => (
            <HomeSinglePost key={post._id} post={post} />
          ))}
          <button onClick={handleShowMoreClick}>Mostra altri</button>
        </div>
      ) : (
        <>
          <Placeholder xs={6} />
          <Placeholder className="w-75" /> <Placeholder style={{ width: "25%" }} />
        </>
      )}
    </>
  );
};

export default HomePostContainer;

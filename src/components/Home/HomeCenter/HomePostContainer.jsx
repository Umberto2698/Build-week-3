import { useState, useEffect } from "react";
import HomeSinglePost from "./HomeSinglePost";
import { getHomePosts, setRandomIndexes } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { CaretDownFill } from "react-bootstrap-icons";

const HomePostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.homePosts.content);
  const loading = useSelector(state => state.homePosts.isLoading);
  const randomIndexes = useSelector(state => state.homePosts.randomIndexes);
  const numRandomPosts = 5;
  const [numSortedPosts, setNumSortedPosts] = useState(5);
  const [sortedMode, setSortedMode] = useState(true);

  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortByDate, setSortByDate] = useState(false);

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
      setNumSortedPosts(numSortedPosts + 5);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setRandomIndexes([]));
      setNumSortedPosts(5);
    };
  }, []);

  useEffect(() => {
    if (posts && !sortByDate) {
      const sorted = [...posts].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      setSortedPosts(sorted.slice(0, numSortedPosts));
    } else if (!sortByDate) {
      setSortedPosts(randomIndexes.map(randomIndex => posts[randomIndex]));
    } else {
      setSortedPosts([]);
    }
  }, [numSortedPosts, sortByDate, posts, randomIndexes]);

  const sortByDateButtonHandler = () => {
    setSortedMode(!sortedMode);
    if (!sortByDate) {
      const sorted = [...posts].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      setSortedPosts(sorted.slice(0, numSortedPosts));
    } else {
      setSortedPosts([]);
    }
    setSortByDate(!sortByDate);
  };

  return (
    <>
      <div className="d-flex mb-1" style={{ cursor: "pointer" }} onClick={sortByDateButtonHandler}>
        <div className="d-flex flex-grow-1 align-items-center">
          <div className="border-bottom border-secondary flex-grow-1"></div>
        </div>
        <div className="ms-3 text-secondary" style={{ fontSize: "0.7rem" }}>
          Seleziona la visualizzazione del feed:
        </div>
        <div className="ms-1" style={{ fontSize: "0.7rem" }}>
          {!sortedMode ? (
            <>
              <span className="fw-medium">Ordina per data</span> <CaretDownFill />
            </>
          ) : (
            <>
              <span className="fw-medium"> Piú rilevanti per primi </span> <CaretDownFill />
            </>
          )}
        </div>
      </div>

      {sortedPosts?.length > 0 ? (
        <div>
          {sortedPosts?.map(post => (
            <HomeSinglePost key={post._id} post={post} />
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
      ) : posts && !loading ? (
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

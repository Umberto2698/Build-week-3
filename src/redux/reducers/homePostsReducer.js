import {
  DELETE_POST,
  GET_HOME_POSTS,
  ISERROR_HOME_POSTS,
  ISLOADING_HOME_POSTS_FALSE,
  ISLOADING_HOME_POSTS_TRUE,
} from "../actions";

const initialState = {
  content: null,
  isLoading: true,
  isError: false,
  randomIndexes: [],
};

const homePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      return { ...state, content: state.content.filter((post) => post._id !== action.payload) };

    case GET_HOME_POSTS:
      return {
        ...state,
        content: action.payload,
      };
    case ISLOADING_HOME_POSTS_TRUE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISLOADING_HOME_POSTS_FALSE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISERROR_HOME_POSTS:
      return {
        ...state,
        isError: action.payload,
      };
    case "SET_RANDOM_INDEXES":
      return {
        ...state,
        randomIndexes: action.payload,
      };
    default:
      return state;
  }
};

export default homePostsReducer;

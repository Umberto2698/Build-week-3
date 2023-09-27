import { GET_POSTS, GET_USER, ISERROR_USER, ISLOADING_USER } from "../actions";

const initialState = {
  content: null,
  isLoading: true,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload,
      };
    case ISLOADING_USER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISERROR_USER:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

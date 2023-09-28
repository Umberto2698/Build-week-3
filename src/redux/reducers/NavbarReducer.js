import { GET_USER, ISERROR_USER, ISLOADING_USER_FALSE, ISLOADING_USER_TRUE } from "../actions";

const initialState = {
  content: null,
  isLoading: true,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        content: action.payload,
      };
    case ISLOADING_USER_TRUE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISLOADING_USER_FALSE:
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

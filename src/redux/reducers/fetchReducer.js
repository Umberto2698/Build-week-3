import { GET_JOBS } from "../actions";

const initialState = {
  random: {
    content: [],
  },
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        random: {
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default fetchReducer;

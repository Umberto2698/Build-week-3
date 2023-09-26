import { GET_JOBS, SELECT_JOB } from "../actions";

const initialState = {
  random: {
    content: [],
  },
  selected: {
    content: "",
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
    case SELECT_JOB:
      return {
        ...state,
        selected: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;

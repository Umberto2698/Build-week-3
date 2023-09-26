import { GET_CATEGORTY_JOBS, GET_JOBS, SELECT_DESCRIPTION, SELECT_JOB } from "../actions";

const initialState = {
  random: {
    content: [],
  },
  category: {
    content: [],
  },
  selected: {
    content: "",
  },
  description: {
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
    case GET_CATEGORTY_JOBS:
      return {
        ...state,
        category: {
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
    case SELECT_DESCRIPTION:
      return {
        ...state,
        description: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default fetchReducer;

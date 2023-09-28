import { ADD_JOB_TO_FAVOURITE, REMOVE_JOB_TO_FAVOURITE } from "../actions";

const initialState = {
  list: {
    content: [],
  },
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_FAVOURITE:
      return {
        ...state,
        list: {
          content: [...state.list.content, action.payload],
        },
      };
    case REMOVE_JOB_TO_FAVOURITE:
      return {
        ...state,
        list: {
          content: state.list.content.filter((job) => job._id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default favouriteReducer;

const setSearch = (search) => {
  return {
    type: "SET_SEARCH",
    payload: search,
  };
};

const setQuery = (query) => {
  return {
    type: "SET_QUERY",
    payload: query,
  };
};

const initialState = {
  search: false,
  searchQuery: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export { setSearch, setQuery, searchReducer };

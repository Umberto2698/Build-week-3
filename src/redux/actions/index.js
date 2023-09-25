export const GET_JOBS = "GET_JOBS";

export const searchJobsAction = query => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const limit = "&limit=20";
  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + query + limit);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      throw error;
    }
  };
};

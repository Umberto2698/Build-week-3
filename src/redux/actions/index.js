export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const SELECT_JOB = "SELECT_JOB";
export const SELECT_DESCRIPTION = "SELECT_DESCRIPTION";

const randomJobEndPoint = "https://strive-benchmark.herokuapp.com/api/jobs?limit=20";
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTU2NTI2NTAsImV4cCI6MTY5Njg2MjI1MH0.ROP89XyV2jpTEa6kkk724nZCyeo7tM76kwNhuPToIb8",
  },
};
export const getRandomJobsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_JOBS_LOADING, payload: true });
      const response = await fetch(randomJobEndPoint, headers);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Sorry, server are down.");
      }
    } catch (error) {
      dispatch({ type: GET_JOBS_ERROR, payload: error.message });
    } finally {
      dispatch({ type: GET_JOBS_LOADING, payload: false });
    }
  };
};

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const ISLOADING_PROFILES_FALSE = "ISLOADING_PROFILES_FALSE";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const ISLOADING_MY_PROFILES_FALSE = "ISLOADING_MY_PROFILES_FALSE";

export const getAllProfilesAction = () => {
  return async (dispatch) => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/";
    const method = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGI4YzM3NTJhODAwMTQ1Njg3NmMiLCJpYXQiOjE2OTU2MzIyNjgsImV4cCI6MTY5Njg0MTg2OH0.gzlYEvqJw2sYnF11tPjrNqPrWR0KLj0FbEEpodBxeZo",
      },
    };

    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const profiles = await resp.json();
        console.log(profiles);
        dispatch({ type: GET_ALL_PROFILES, payload: profiles });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_PROFILES_FALSE });
    }
  };
};

export const getMyProfileAction = () => {
  return async (dispatch) => {
    const URL = "https://striveschool-api.herokuapp.com/api/profile/me";
    const method = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGI4YzM3NTJhODAwMTQ1Njg3NmMiLCJpYXQiOjE2OTU2MzIyNjgsImV4cCI6MTY5Njg0MTg2OH0.gzlYEvqJw2sYnF11tPjrNqPrWR0KLj0FbEEpodBxeZo",
      },
    };

    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const myProfile = await resp.json();
        console.log(myProfile);
        dispatch({ type: GET_MY_PROFILE, payload: myProfile });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_MY_PROFILES_FALSE });
    }
  };
};

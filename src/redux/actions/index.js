export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const SELECT_JOB = "SELECT_JOB";
export const SELECT_DESCRIPTION = "SELECT_DESCRIPTION";

export const GET_USER = "GET_USER";

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const ISLOADING_PROFILES_FALSE = "ISLOADING_PROFILES_FALSE";
export const ISLOADING_MY_PROFILES_FALSE = "ISLOADING_MY_PROFILES_FALSE";
export const ISLOADING_USER_PROFILES_FALSE = "ISLOADING_USER_PROFILES_FALSE";
export const ISLOADING_USER_PROFILES_TRUE = "ISLOADING_USER_PROFILES_TRUE";

export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";
export const GET_FORM_DATA = "GET_FORM_DATA";
export const GET_SEARCH_DATA = "GET_SEARCH_DATA";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const ALL_EXPERIENCES = "ALL_EXPERIENCES";
export const CHANGE_EXP = "CHANGE_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const NEW_POST = "NEW_POST";
export const PUBLIC_POST = "PUBLIC_POST";
export const JOBS = "JOBS";
export const COMMENTS = "COMMENTS";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";
export const SINGLE_PROFILE = "SINGLE_PROFILE";
export const SET_SEARCH = "SET_SEARCH";
export const SET_QUERY = "SET_QUERY";

export const postFormAction = (content) => ({
  type: POST_EXPERIENCES,
  payload: content,
});
export const getFormAction = (content) => ({
  type: GET_FORM_DATA,
  payload: content,
});
export const getSearchAction = (content) => ({
  type: GET_SEARCH_DATA,
  payload: content,
});
export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });
export const setQuery = (query) => ({ type: SET_QUERY, payload: query });

const randomJobEndPoint =
  "https://strive-benchmark.herokuapp.com/api/jobs?limit=20";
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

//_______________________________________________________________________________________________________________________

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
        console.log("myProfile", myProfile);
        dispatch({ type: GET_MY_PROFILE, payload: myProfile });
        dispatch({ type: GET_USER_PROFILE, payload: myProfile });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_MY_PROFILES_FALSE });
    }
  };
};

export const getUserProfileAction = (userId) => {
  return async (dispatch) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
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
        const userProfile = await resp.json();
        console.log("userProfile", userProfile);
        dispatch({ type: GET_USER_PROFILE, payload: userProfile });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_USER_PROFILES_FALSE });
    }
  };
};

export const modifyUserProfileAction = (query) => {
  return async (dispatch) => {
    const URL = `https://striveschool-api.herokuapp.com/api/profile/`;
    const method = {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGI4YzM3NTJhODAwMTQ1Njg3NmMiLCJpYXQiOjE2OTU2MzIyNjgsImV4cCI6MTY5Njg0MTg2OH0.gzlYEvqJw2sYnF11tPjrNqPrWR0KLj0FbEEpodBxeZo",
        "Content-type": "application/json",
      },
      body: JSON.stringify(query),
    };

    try {
      const resp = await fetch(URL, method);
      if (resp.ok) {
        const parseBody = await resp.json();
        dispatch({ type: GET_USER_PROFILE, payload: parseBody });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: ISLOADING_USER_PROFILES_FALSE });
    }
  };
};

// export const getMyExperienceAction = (userId) => {
//   return async (dispatch) => {
//     const URL = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`
//     const method = {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTExNGI4YzM3NTJhODAwMTQ1Njg3NmMiLCJpYXQiOjE2OTU2MzIyNjgsImV4cCI6MTY5Njg0MTg2OH0.gzlYEvqJw2sYnF11tPjrNqPrWR0KLj0FbEEpodBxeZo",
//       },
//     };

//     try {
//       const resp = await fetch(URL, method)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }
//_______________________________________________________________________________________________________________________

const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

export const getPostsAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(postsEndpoint, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      if (response.ok) {
        const allPosts = await response.json();
        dispatch({ type: GET_POSTS, payload: allPosts });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const postPostAction = (newData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(postsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({ text: newData }),
      });
      if (response.ok) {
        const newPostData = await response.json();
        dispatch({ type: PUBLIC_POST, payload: newPostData });
        dispatch(getPostsAction());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const putPostAction = (newData, postID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(postsEndpoint + "/" + postID, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
        body: JSON.stringify({ text: newData }),
      });
      if (response.ok) {
        dispatch(getPostsAction());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePostAction = (postID) => {
  return async (dispatch) => {
    try {
      const response = await fetch(postsEndpoint + "/" + postID, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      if (response.ok) {
        alert("Post eliminato!");
        dispatch(getPostsAction());
      }
    } catch (error) {
      console.log(error);
    }
  };
};

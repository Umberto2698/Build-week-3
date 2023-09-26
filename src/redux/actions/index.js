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

export const postFormAction = (content) => ({ type: POST_EXPERIENCES, payload: content });
export const getFormAction = (content) => ({ type: GET_FORM_DATA, payload: content });
export const getSearchAction = (content) => ({ type: GET_SEARCH_DATA, payload: content });

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

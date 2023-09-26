import {
  GET_ALL_PROFILES,
  GET_MY_PROFILE,
  ISLOADING_MY_PROFILES_FALSE,
  ISLOADING_PROFILES_FALSE,
} from "../actions";

const initialState = {
  all: [],
  tenRandomProfiles: [],
  myProfile: null,
  isLoadingProfiles: true,
  isLoadingMyProfile: true,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILES:
      return {
        ...state,
        all: action.payload,
      };
    case ISLOADING_PROFILES_FALSE:
      return {
        ...state,
        isLoadingProfiles: false,
      };

    case GET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case ISLOADING_MY_PROFILES_FALSE:
      return {
        ...state,
        isLoadingMyProfile: false,
      };
    default:
      return state;
  }
};

export default profilesReducer;

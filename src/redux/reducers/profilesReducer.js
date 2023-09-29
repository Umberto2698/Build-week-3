import {
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  GET_ALL_PROFILES,
  GET_CURRENT_EXPERIENCE,
  GET_EXPERIENCE,
  GET_MY_PROFILE,
  GET_SPECIFIC_EXPERIENCE,
  GET_USER_PROFILE,
  ISLOADING_MY_PROFILES_FALSE,
  ISLOADING_PROFILES_FALSE,
  ISLOADING_USER_PROFILES_FALSE,
  ISLOADING_USER_PROFILES_TRUE,
  PUT_EXPERIENCE,
} from "../actions";

const initialState = {
  all: [],
  myProfile: null,
  currentProfile: null,
  experience: [],
  currentExperience: [],
  modExperience: null,
  isLoadingProfiles: true,
  isLoadingMyProfile: true,
  isLoadingUserProfile: true,
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILES:
      return {
        ...state,
        all: action.payload,
      };

    case GET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };

    case GET_USER_PROFILE:
      return {
        ...state,
        currentProfile: action.payload,
      };

    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };

    case GET_CURRENT_EXPERIENCE:
      return {
        ...state,
        currentExperience: action.payload,
      };

    case GET_SPECIFIC_EXPERIENCE:
      return {
        ...state,
        modExperience: action.payload,
      };

    case ADD_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.concat(action.payload),
      };

    case PUT_EXPERIENCE:
      return {
        ...state,
        experience: state.experience
          .slice(
            0,
            state.experience.findIndex(
              (elem) => elem._id === action.payload._id
            )
          )
          .concat(
            (state.experience.slice(
              state.experience.findIndex(
                (elem) => elem._id === action.payload._id
              ),
              state.experience.findIndex(
                (elem) => elem._id === action.payload._id
              ) + 1
            )[0] = [action.payload])
          )
          .concat(
            state.experience.slice(
              state.experience.findIndex(
                (elem) => elem._id === action.payload._id
              ) + 1
            )
          ),
        // experience: state.experience.map((elem, i) => {return (if(i === action.payload[1]) {elem = action.payload[0]})})
      };

    case DELETE_EXPERIENCE:
      return {
        ...state,
        experience: state.experience.filter(
          (elem) => elem._id !== action.payload
        ),
      };
    case ISLOADING_PROFILES_FALSE:
      return {
        ...state,
        isLoadingProfiles: false,
      };

    case ISLOADING_MY_PROFILES_FALSE:
      return {
        ...state,
        isLoadingMyProfile: false,
      };

    case ISLOADING_USER_PROFILES_FALSE:
      return {
        ...state,
        isLoadingUserProfile: false,
      };

    case ISLOADING_USER_PROFILES_TRUE:
      return {
        ...state,
        isLoadingUserProfile: true,
      };

    default:
      return state;
  }
};

export default profilesReducer;

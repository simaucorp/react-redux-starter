import * as types from "./types";

const initialState = {
  isAuthenticated: false,
  isLoggingIn: false,
  logInCompleted: false,
  logInFailed: false
};

const authReducers = function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SIGNUP_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        loggedInUser: {
          ...payload.user
        }
      };
    case types.LOGIN:
      return {
        ...state,
        isLoggingIn: true,
        logInCompleted: false,
        logInFailed: false
      };
    case types.LOGIN_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        isLoggingIn: false,
        logInCompleted: true,
        logInFailed: false
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        isLoggingIn: false,
        logInCompleted: false,
        logInFailed: true
      };
    case types.CHECK_STATUS_COMPLETED:
      return {
        ...state,
        isAuthenticated: true,
        token: payload.data.token
      };

    case types.LOGOUT_COMPLETED || types.LOGOUT_FAILED:
      return {
        ...state,
        ...initialState
      };
    case types.SET_USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true
      };
    case types.RESET_PASSWORD_COMPLETED:
      return {
        ...state,
        ...initialState
      };
    case types.SET_USER_UNAUTHORIZED:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default authReducers;

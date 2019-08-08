import * as types from "./types";

export const signup = data => ({
  type: types.SIGNUP,
  meta: {
    async: true,
    blocking: true,
    path: `/signup`,
    method: "POST",
    body: data
  }
});

export const login = data => ({
  type: types.LOGIN,
  meta: {
    async: true,
    blocking: true,
    path: `/login`,
    method: "POST",
    body: data
  }
});

export const checkStatus = data => ({
  type: types.CHECK_STATUS,
  meta: {
    async: true,
    blocking: true,
    path: `/status`,
    method: "GET",
    body: data,
    isPrivate: true
  }
});

export const logout = token => {
  return {
    type: types.LOGOUT_STARTED,
    meta: {
      async: true,
      blocking: true,
      path: `/logout`,
      method: "POST",
      body: {},
      token
    }
  };
};

export const setUserLoggedIn = () => ({
  type: types.SET_USER_LOGGED_IN
});

import jwt from "jsonwebtoken";

export default class AuthService {
  isLoggedIn = () => {
    const token = this.getToken();
    const decodedToken = jwt.decode(token, { complete: true });
    if (token && decodedToken) {
      const dateNow = new Date();
      return decodedToken.payload.exp * 1000 > dateNow.getTime();
    }

    return false;
  };

  setToken = token => {
    window.localStorage.setItem("Token", token);
  };

  getToken = () => {
    return window.localStorage.getItem("Token");
  };

  setUser = user => {
    window.localStorage.setItem("user", JSON.stringify(user));
  };

  getUser = req => {
    return window.localStorage.getItem("user");
  };

  removeToken = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("user");
  };
}

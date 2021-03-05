import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!this.getAuthToken();
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
};

export default TokenService;

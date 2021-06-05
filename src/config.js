module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000",
  TOKEN_KEY: "watchit-app-token",
  //API_ENDPOINT:
  //process.env.API_ENDPOINT || "https://fierce-cove-59812.herokuapp.com",
  API_ENDPOINT: process.env.API_ENDPOINT || "http://localhost:8000",
  API_KEY: process.env.REACT_APP_API_KEY,
  DATABASE_URL: "postgresql://josephinehan@localhost/watchit",
};

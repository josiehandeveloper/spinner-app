module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000",
  TOKEN_KEY: "watchit-app-token",
  // API_ENDPOINT:
  //   process.env.API_ENDPOINT || "https://murmuring-crag-13918.herokuapp.com",
  API_ENDPOINT: process.env.API_ENDPOINT || "http://localhost:8000",
  API_KEY: process.env.REACT_APP_API_KEY || "3dbc1bc5de0aea0ac4c73f5bc75d2b16",
  DATABASE_URL: "postgresql://josephinehan@localhost/watchit",
};

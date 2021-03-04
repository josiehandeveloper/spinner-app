module.exports = {
  PORT: process.env.PORT || 8080,
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:8000",
  TOKEN_KEY: "watchit-app-token",
  API_ENDPOINT: "https://serene-gorge-32330.herokuapp.com",
  API_KEY: process.env.REACT_APP_API_KEY,
  DB_URL: "postgresql://josephinehan@localhost/watchit",
};

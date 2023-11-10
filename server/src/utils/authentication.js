require("dotenv").config();

const ACCESS_TOKEN_EXPIRES_IN =
  process.env.NODE_ENV === "production" ? "15m" : "30s";
const REFRESH_TOKEN_EXPIRES_IN =
  process.env.NODE_ENV === "production" ? "1d" : "60s";
const COOKIE_EXPIRES_IN =
  process.env.NODE_ENV === "production" ? 24 * 60 * 60 * 1000 : 60 * 1000;

const tokenFrom = (authHeader) => authHeader.split(" ")[1];

module.exports = {
  tokenFrom,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  COOKIE_EXPIRES_IN,
};

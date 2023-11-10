const { saveNewUser } = require("../services/signup");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  COOKIE_EXPIRES_IN,
} = require("../utils/authentication");

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const userInfo = { name, email };

  const acceessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });

  saveNewUser(name, email, password, refreshToken);

  res.json({ acceessToken }).cookie("jwt", refreshToken, {
    maxAge: COOKIE_EXPIRES_IN,
    httpOnly: true,
  });
};

module.exports = { createUser };

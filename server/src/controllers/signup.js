const { saveNewUser } = require("../services/signup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const {
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  COOKIE_EXPIRES_IN,
} = require("../utils/authentication");

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const userInfo = { name, email };

  const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });

  const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) throw err;
    saveNewUser(name, email, hashedPassword, refreshToken);
  });

  res
    .cookie("jwt", refreshToken, {
      maxAge: COOKIE_EXPIRES_IN,
      secure: true,
      httpOnly: true,
      sameSite: "None",
    })
    .json({ accessToken });
};

module.exports = { createUser };

const { findUserBy, updateRefreshToken } = require("../services/login");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  COOKIE_EXPIRES_IN,
} = require("../utils/authentication");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = findUserBy(email);
    if (!user) throw "invalid email";

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw "invalid password";

    const userInfo = {
      name: user.name,
      email,
    };

    const acceessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
    });

    const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: REFRESH_TOKEN_EXPIRES_IN,
    });

    updateRefreshToken(email, refreshToken);

    res
      .json({ acceessToken })
      .cookie("jwt", refreshToken, {
        maxAge: COOKIE_EXPIRES_IN,
        httpOnly: true,
      });
  } catch (e) {
    console.log(`error: ${e}`);
    return res.status(401).json({
      error: "invalid email or password",
    });
  }
};

module.exports = handleLogin;

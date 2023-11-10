const { findUserBy } = require("../services/login");
const { COOKIE_EXPIRES_IN } = require("../utils/authentication");
const { deleteRefreshToken} = require("../services/logout")

const handleLogout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // no contant

  const refreshToken = cookies.jwt;
  const user = findUserBy(refreshToken);
  if (user) deleteRefreshToken(email);

  res.clearCookie("jwt", refreshToken, {
    maxAge: COOKIE_EXPIRES_IN,
    httpOnly: true,
  });
  return res.sendStatus(204);
};

module.exports = { handleLogout };

const jwt = require("jsonwebtoken");
const findUserBy = require("../services/refresh");
const { ACCESS_TOKEN_EXPIRES_IN } = require("../utils/authentication");
require("dotenv").config();

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const user = findUserBy({ refreshToken });
  if (!user) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || user.email !== decoded.email) return res.sendStatus(403);

    const accessToken = jwt.sign(
      { name: decoded.name, email: decoded.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );

    res.json({ accessToken });
  });
};

module.exports = handleRefreshToken;

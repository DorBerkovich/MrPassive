const jwt = require("jsonwebtoken");
const { findUserBy } = require("../services/refresh");
const { ACCESS_TOKEN_EXPIRES_IN } = require("../utils/authentication");
require("dotenv").config();

const handleRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.sendStatus(403);

      const user = await findUserBy({ email: decoded.email, refreshToken });
      if (!user) return res.sendStatus(403);

      const accessToken = jwt.sign(
        { name: decoded.name, email: decoded.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
      );

      console.log("from refresh: new access token generated")
      res.json({ accessToken });
    }
  );
};

module.exports = handleRefreshToken;

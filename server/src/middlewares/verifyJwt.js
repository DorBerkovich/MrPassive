const tokenFrom = require("../utils/authentication");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwt = (req, res, next) => {
  const authHeader = req.get("authorization");
  console.log(authHeader);
  if (!authHeader) res.sendStatus(401);

  const token = tokenFrom(authHeader);
  jwt.verify(token, proccess.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // forbidden

    req.userInfo = {
      name: decoded.name,
      email: decoded.email,
    };
    next();
  });
};

module.exports = verifyJwt;

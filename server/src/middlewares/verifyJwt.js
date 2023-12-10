const { tokenFrom } = require("../utils/authentication");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwt = (req, res, next) => {
  const authHeader = req.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) res.sendStatus(401);

  const token = tokenFrom(authHeader);
  console.log("authHeader:", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // forbidden

    req.userInfo = {
      name: decoded.name,
      email: decoded.email,
    };
    console.log("req.userInfo", req.userInfo);
    next();
  });
};

module.exports = verifyJwt;

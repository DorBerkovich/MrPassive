const { findUserBy } = require("../services/admin");

const verifyAdmin = (req, res, next) => {
  const user = findUserBy({ email: req.userInfo.email });
  if (!user?.isAdmin) return res.sendStatus(403);

  next();
};

module.exports = verifyAdmin
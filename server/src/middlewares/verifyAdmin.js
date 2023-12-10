const { findUserBy } = require("../services/admin");

const verifyAdmin = async (req, res, next) => {
  const user = await findUserBy({ email: req.userInfo.email });
  if (!user?.isAdmin) return res.sendStatus(403);

  next();
};

module.exports = verifyAdmin;

const { saveMassage, findUserBy } = require("../services/contact");

const createMassage = (req, res) => {
  console.log(req.body);
  const { email } = req.userInfo;
  const userId = findUserBy(email).userId;
  const { massage } = req.body;
  saveMassage(massage, userId);
  res.status(200).json({ res: "success" });
};

module.exports = createMassage;

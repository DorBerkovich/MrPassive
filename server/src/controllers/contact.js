const { saveMassage, findUserBy } = require("../services/contact");

const createMassage = async (req, res) => {
  console.log(req.userInfo)
  const { email } = req.userInfo;
  const foundUser = await findUserBy({ email })
  const userId = foundUser.id;
  const { massage } = req.body;
  saveMassage(massage, userId);
  res.status(200).json({ res: "success" });
};

module.exports = createMassage;

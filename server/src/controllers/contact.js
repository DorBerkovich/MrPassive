const { saveMassage } = require("../services/contact");

const createMassage = async (req, res) => {
  console.log(req.userInfo);
  const { email } = req.userInfo;
  const { massage } = req.body;
  try {
    await saveMassage(massage, email);
  } catch (err) {
    console.error(err);
  }
  res.sendStatus(200);
};

module.exports = createMassage;

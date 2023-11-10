const { getMassagesFromDB } = require("../services/admin");

const getAllMassages = (req, res) => {
  const allMassages = getMassagesFromDB();
  res.status(200).json({ res: "success", allMassages });
};

module.exports = getAllMassages;

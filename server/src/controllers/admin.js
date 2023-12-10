const { getMassagesFromDB } = require("../services/admin");

const getAllMassages = async (req, res) => {
  const allMassages = await getMassagesFromDB();
  console.log(allMassages);
  res.json({ allMassages });
};

module.exports = getAllMassages;

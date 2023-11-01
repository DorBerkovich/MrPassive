const prisma = require("../utils/prismaClient");

const createMassage = async (req, res) => {
  console.log(req.body)
  const userId = Number(req.params.id);
  const { massage } = req.body;
  await prisma.massagesToMe.create({
    data: {
      massage,
      userId,
    },
  });
  res.status(200).json({ res: "success" });
};

module.exports = createMassage;

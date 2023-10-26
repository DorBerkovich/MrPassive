const prisma = require("../utils/prismaClient");

const createMassage = async (req, res) => {
  let { massage, userId } = req.query;
  userId = Number(userId);
  await prisma.massagesToMe.create({
    data: {
      massage,
      userId,
    },
  });
  res.status(200).json({ res: "success" });
};



module.exports =  createMassage;

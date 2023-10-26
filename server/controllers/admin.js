const prisma = require("../utils/prismaClient");

const getAllMassages = async (req, res) => {
    const allMassages = await prisma.massagesToMe.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
    res.status(200).json({ res: "success", allMassages });
  };

  module.exports = getAllMassages
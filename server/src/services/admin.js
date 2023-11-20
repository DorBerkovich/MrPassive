const prisma = require("../utils/prismaClient");
const { findUserBy } = require("./login")

const getMassagesFromDB = async () => {
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

  return allMassages;
};

module.exports = { getMassagesFromDB, findUserBy };

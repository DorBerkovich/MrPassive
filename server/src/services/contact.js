const prisma = require("../utils/prismaClient");
const { findUserBy } = require("./login");

const saveMassage = async (massage, userId) => {
  await prisma.massagesToMe.create({
    data: {
      massage,
      userId,
    },
  });
};

module.exports = { saveMassage, findUserBy };

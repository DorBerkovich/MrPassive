const prisma = require("../utils/prismaClient");

const saveMassage = async (massage, email) => {
  await prisma.massagesToMe.create({
    data: {
      massage,
      user: { connect: { email } },
    },
  });
};

module.exports = { saveMassage };

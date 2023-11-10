const prisma = require("../utils/prismaClient");

const deleteRefreshToken = async (email) => {
  await prisma.users.update({
    where: {
      email,
    },
    data: {
      refreshToken: null,
    },
  });
};

module.exports = { deleteRefreshToken };

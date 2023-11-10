const prisma = require("../utils/prismaClient");

const findUserBy = async (...params) => {
  const user = await prisma.users.findUnique({
    where: {
      ...params,
    },
  });

  return user;
};

const updateRefreshToken = async (email, refreshToken) => {
  await prisma.users.update({
    where: {
      email,
    },
    data: {
      refreshToken,
    },
  });
};

module.exports = { findUserBy, updateRefreshToken };

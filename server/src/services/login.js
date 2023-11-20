const prisma = require("../utils/prismaClient");

// gets an object: {email: d@d}
const findUserBy = async (...params) => {
  userInfo = params.reduce((prevObj, param) => {
    return { ...prevObj, ...param };
  }, {});

  const user = await prisma.users.findUnique({
    where: userInfo,
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

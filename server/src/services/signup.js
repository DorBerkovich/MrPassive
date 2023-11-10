const prisma = require("../utils/prismaClient");

const saveNewUser = async (name, email, password, refreshToken) => {
  console.log(name, email, password, refreshToken)
  await prisma.users.create({
    data: {
      name,
      email,
      password,
      refreshToken,
    },
  });
};

module.exports = { saveNewUser };

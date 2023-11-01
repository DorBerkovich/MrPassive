const prisma = require("../utils/prismaClient");

const createUser = async (req, res) => {
  // console.log(req)
  const { name, email, password } = req.body;
  await prisma.users.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.json({ res: "success" });
};

module.exports = { createUser };

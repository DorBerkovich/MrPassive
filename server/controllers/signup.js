const prisma = require("../utils/prismaClient");

const createUser = async (req, res) => {
  const { name, email } = req.query;
  console.log(name, email)
  await prisma.users.create({
    data: {
        name,
        email,
    },
  });
  res.json({ res: "success" });
};

module.exports = {createUser}

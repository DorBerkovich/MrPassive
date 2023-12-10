const bcrypt = require("bcrypt");
const { saveNewUser } = require("../services/signup");
require("dotenv").config();
const { findUserBy } = require("../services/login");

const createAdmin = async () => {
  const admin = await findUserBy({ email: process.env.ADMIN_EMAIL });
  if (admin) return;

  bcrypt.hash(process.env.ADMIN_PASSWORD, 10, async (err, hashedPassword) => {
    if (err) throw err;
    console.log("Admin created");
    await prisma.users.create({
      data: {
        name: "admin",
        email: process.env.ADMIN_EMAIL,
        password: hashedPassword,
        isAdmin: true,
      },
    });
  });
};

module.exports = createAdmin;

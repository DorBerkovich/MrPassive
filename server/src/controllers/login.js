const prisma = require("../src/utils/prismaClient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const ONE_DAY = 24 * 60 * 60 * 1000;

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) throw "invalid email";

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) throw "invalid password";

    const userInfo = {
      name: user.name,
      email,
    };

    const acceessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30s",
    });

    const refreshToken = jwt.sign(userInfo, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });

    await prisma.users.update({
      where: {
        email,
      },
      data: {
        refreshToken,
      },
    });
<<<<<<< HEAD:server/src/controllers/login.js
=======

    res.json({ acceessToken }).cookie("jwt", refreshToken, { maxAge: ONE_DAY, httpOnly: true });

>>>>>>> 5aa09b7bdd9582a32b72e7c47c3f1b041cece209:server/controllers/login.js
  } catch (e) {
    console.log(`error: ${e}`);
    return res.status(401).json({
      error: "invalid email or password",
    });
  }
};

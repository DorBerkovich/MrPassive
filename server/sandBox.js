const prisma = require("./src/utils/prismaClient");

const findUserBy = async (...params) => {
  userInfo = params.reduce((prevObj, param) => {
    return { ...prevObj, ...param };
  }, {});

  const user = await prisma.users.findUnique({
    where: userInfo,
  });

  return user
};

const email = "dor1@dor";
const id = 1;
user = findUserBy({ email, id }).then((res) => console.log(res));
// console.log(user)


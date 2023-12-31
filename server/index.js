require("dotenv").config();
const server = require("./src/server");
const createAdmin = require("./src/utils/createAdmin");

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`start server on port ${PORT}`);
  createAdmin();
});

const requesLogger = (req, res, next) => {
  console.log("Method:\t", req.method);
  console.log("Path:\t", req.path);
  console.log("Body:\t", req.body);
  console.log("---");
  next();
};

module.exports = requesLogger

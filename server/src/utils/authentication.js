const tokenFrom = (authHeader) => authHeader.split(" ")[1]

module.exports = tokenFrom
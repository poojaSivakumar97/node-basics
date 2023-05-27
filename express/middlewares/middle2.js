const secondMiddleware = (req, res, next) => {
  console.log(`Am the second middleware`);
  next();
};
module.exports = { secondMiddleware };

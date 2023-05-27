function firstMiddleware(req, res, next) {
  console.log("Am custom middleware");
  next();
}

module.exports = { firstMiddleware };

module.exports = {
  ensureAuth: function (req, res, next) {
    console.log(
      "req.isAuthenticated exists:",
      typeof req.isAuthenticated === "function"
    );
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};

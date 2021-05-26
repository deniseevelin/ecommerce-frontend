const controller = require("../controllers/home-controller");

module.exports = (app) => {
  app.get("/home", controller.form);

  app.get("/home/account", controller.homeAccount);

  app.get("/home/users", controller.homeUser);

  app.get("/company", controller.company)
};

const controller = require("../controllers/index-controller");

module.exports = (app) => {
  app.get("/", controller.home);

  app.get("/company", controller.company);

  app.get("/contact", controller.contacts);

  app.get("/logout", controller.logout);
};

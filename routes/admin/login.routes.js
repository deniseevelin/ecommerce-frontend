const controller = require("../../controllers/admin/users-controller");

module.exports = (app) => {
  app.get("/admin/login", controller.formLogin);
  app.post("/admin/login", controller.login);
};

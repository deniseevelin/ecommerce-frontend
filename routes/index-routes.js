const controller = require("../controllers/index-controller");

module.exports = (app) => {
  app.get("/home", controller.form);

  app.get("/company", controller.company);

  app.get("/contact", controller.contacts);

  app.get("/cart", controller.cart);

  app.get("/userlogin", controller.userFormLogin);
};

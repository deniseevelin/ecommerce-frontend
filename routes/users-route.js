const controller = require("../controllers/users-controller");

module.exports = (app) => {
  app.get("/users", controller.showUsers);
  app.get("/logout", controller.logout);

  app.post("/users/register", controller.registerUser);
  // app.get("/userregister", controller.UserFormRegister);

  app.post("/users/login", controller.userLogin);
  app.get("/userlogin", controller.UserFormLogin);
};

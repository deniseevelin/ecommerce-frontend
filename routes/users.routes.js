const controller = require("../controllers/users-controller");

module.exports = (app) => {
  app.get("/users/login", controller.formLogin);
  app.post("/users/login", controller.login);

  app.patch("/users/:id", controller.update);

  app.get("/profile/:id", controller.user);

  app.post("/users", controller.register);  
  app.get("/users", controller.list);
};

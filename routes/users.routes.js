const controller = require("../controllers/users-controller");

module.exports = (app) => {
  app.post("/users/login", controller.login);
  app.post("/users", controller.register);  
  app.get("/users", controller.list);
  app.get("/login", controller.formLogin);
};

const controller = require("../controllers/users-controller");

module.exports = (app) => {

  app.post("/users/register", controller.registerUser);

  app.post("/users/login", controller.userLogin);
  
  app.get("/users", controller.showUsers);
  
  app.get("/logout", controller.logout);
  
};

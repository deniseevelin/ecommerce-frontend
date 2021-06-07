const controller = require("../controllers/products-controller");

module.exports = (app) => {
  app.get("/products/:id", controller.byId);

  app.get("/products", controller.list);
};

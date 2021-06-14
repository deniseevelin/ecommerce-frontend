const controller = require("../controllers/products-controller");

module.exports = (app) => {
  app.get("/products/:id", controller.show);

  app.get("/products", controller.list);
};

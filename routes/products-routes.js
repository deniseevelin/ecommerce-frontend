const controller = require("../controllers/products-controller");

module.exports = (app) => {
  app.get("/products", controller.getAllProducts);
  app.get("/product/:id", controller.getByIdProducts);
  app.get("/products/:id", controller.ProductId);
  app.get("/cart", controller.Cart);
  app.post("/products", controller.registerProduct);
};

const controller = require("../controllers/products-controller");

module.exports = (app) => {
  app.patch("/product/update/:id", controller.renderUpdateProduct);

  app.delete("/products/remove/:id", controller.renderRemoveProduct);

  app.post("/products/register", controller.renderRegisterProduct);

  app.get("/product/:id", controller.renderProductsById);

  app.get("/products", controller.renderAllProducts);
};
